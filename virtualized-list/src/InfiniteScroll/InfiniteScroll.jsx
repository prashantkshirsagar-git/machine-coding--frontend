import { useState } from "react";
import "./style.css";

const LIST_HEIGHT = 400;
const ROW_HEIGHT = 42;
const OVERSCAN = 10;

export default function InfiniteScroll({ data = [], renderRow = () => {} }) {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.max(Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN, 0);

  let renderedRowCount = Math.floor(LIST_HEIGHT / ROW_HEIGHT + 2 * OVERSCAN);
  renderedRowCount = Math.min(data.length - startIndex, renderedRowCount);

  function handleScroll(e) {
    setScrollTop(e.target.scrollTop);
  }

  return (
    <>
      <div
        onScroll={handleScroll}
        style={{ height: `${LIST_HEIGHT}px`, overflowY: "auto" }}
        className="infinite-scroll"
      >
        <div style={{ height: `${data.length * ROW_HEIGHT}px` }}>
          <div style={{ transform: `translateY(${startIndex * ROW_HEIGHT}px)` }}>
            {data
              .slice(startIndex, startIndex + renderedRowCount)
              .map((d, i) => {
                const idx = startIndex + i;
                return (
                  <div key={idx} style={{ height: `${ROW_HEIGHT}px` }}>
                    {renderRow(d)}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div>startIndex: {startIndex} | renderedRowCount: {renderedRowCount}</div>
    </>
  );
}