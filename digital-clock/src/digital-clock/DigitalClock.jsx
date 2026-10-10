import { useEffect, useState, useRef } from "react";
import "./style.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const requestRef = useRef();

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date().toLocaleTimeString()); 
      requestRef.current = requestAnimationFrame(updateClock);
    };

    requestRef.current = requestAnimationFrame(updateClock);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return <div>{time}</div>;
}

export default DigitalClock;