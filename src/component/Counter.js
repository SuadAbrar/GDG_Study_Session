import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter Application</h2>
      <h3 className="count">{count}</h3>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)} className="button">
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
          className="button"
        >
          Decrement
        </button>
        <button onClick={() => setCount(0)} className="button">
          Reset
        </button>
      </div>
    </div>
  );
}
export default Counter;
