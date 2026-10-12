import { useState } from "react";
import "./style.css";

const LIST_HEIGHT = 400;
const ROW_HEIGHT = 42;
const OVERSCAN = 20;

export default function InfiniteScrollWithoutOptimization({ data = [], renderRow = () => {} }) {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.max(Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN, 0);
  const endIndex = Math.min(
    Math.floor((scrollTop + LIST_HEIGHT) / ROW_HEIGHT) + OVERSCAN,
    data.length
  );

  function handleScroll(e) {
    setScrollTop(e.target.scrollTop);
  }

  return (
    <>
      <div
        onScroll={handleScroll}
        style={{ height: `${LIST_HEIGHT}px`, overflowY: "auto" }}
        className="infinite-scroll-without-optimization"
      >
        <div style={{ height: `${data.length * ROW_HEIGHT}px`, position: "relative" }}>
          {data.slice(startIndex, endIndex).map((d, i) => {
            const idx = startIndex + i;
            const top = `${idx * ROW_HEIGHT}px`;
            return (
              <div
                key={idx}
                className="is-row"
                style={{ height: `${ROW_HEIGHT}px`, top, position: "absolute", width: "100%" }}
              >
                {renderRow(d)}
              </div>
            );
          })}
        </div>
      </div>
      <div>startIndex: {startIndex} | endIndex: {endIndex}</div>
    </>
  );
}