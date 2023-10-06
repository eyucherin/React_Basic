import React, { useState } from "react";

export default function Counter({setCurrentCount,totalCount}) {
  let [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h2>{count} / {totalCount}</h2>
      <div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
            setCurrentCount((prev) => prev + 1);
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
            setCurrentCount((prev) => prev - 1);
          }}
        >
          subtract
        </button>
      </div>
    </div>
  );
}
