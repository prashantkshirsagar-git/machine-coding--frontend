import React, { createContext, useContext, useState, useRef, useLayoutEffect, useCallback } from "react";
import { createPortal } from "react-dom";

const PopoverContext = createContext(null);

function Popover({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  const updatePosition = useCallback(() => {
    if (!buttonRef.current || !contentRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const content = contentRef.current;

    
    const top = buttonRect.bottom + 8; 
    const left = buttonRect.left;

    content.style.top = `${top}px`;
    content.style.left = `${left}px`;
  }, []);

  useLayoutEffect(() => {
    if (isOpen) {
      updatePosition();

      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [isOpen, updatePosition]);

  const togglePopover = () => setIsOpen((prev) => !prev);

  return (
    <PopoverContext.Provider value={{ buttonRef, contentRef, isOpen, togglePopover }}>
      <div className="popover-wrapper">{children}</div>
    </PopoverContext.Provider>
  );
}

function Action({ children }) {
  const { togglePopover, buttonRef } = useContext(PopoverContext);
  return (
    <button ref={buttonRef} onClick={togglePopover} type="button">
      {children}
    </button>
  );
}

function Content({ children }) {
  const { isOpen, contentRef } = useContext(PopoverContext);

  if (!isOpen) return null;

  return createPortal(
    <div ref={contentRef} className="popover-content">
      {children}
    </div>,
    document.body
  );
}

Popover.Action = Action;
Popover.Content = Content;

export default Popover;