import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Counter</div>
      <div>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </>
  );
};

export default Counter;
