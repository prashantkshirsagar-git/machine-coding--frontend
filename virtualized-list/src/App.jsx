import React from "react";
import "./App.css";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll.jsx";
import InfiniteScrollWithoutOptimization from "./InfiniteScroll/WithoutOptimization.jsx";

const data = Array.from({ length: 400 }, (_, index) => index);

export default function App() {
  return (
    <div className="App">
      <h1>InfiniteScroll</h1>
      <h2>by Frontend Master</h2>

      <div className="cont">
        <div>
          Without Optimization
          <InfiniteScrollWithoutOptimization
            data={data}
            renderRow={(row) => <div>{row}</div>}
          />
        </div>
        <div>
          With Optimization
          <InfiniteScroll
            data={data}
            renderRow={(row) => <div>{row}</div>}
          />
        </div>
      </div>
    </div>
  );
}