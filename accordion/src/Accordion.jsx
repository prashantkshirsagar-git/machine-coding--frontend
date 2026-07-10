import React, { useState } from "react";

const Accordion = ({ item }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex == index ? null : index);
  };
  return (
    !item ||(item.length === 0) ?"No items available" :(
      <div className="accordion">
        {item.map((item, index) => {
          return (
            <div key={index} className="accordion-item">
              <button
                className="accordion-title"
                onClick={() => handleToggle(index)}
              >
                {item.title}
                <span className="right">
                  {openIndex === index ? "🔺" : "🔻"}
                </span>
              </button>

              {openIndex === index && (
                <div className="accordion-content">{item.content}</div>
              )}
            </div>
          );
        })}
      </div>
    )
  );
};

export default Accordion;
