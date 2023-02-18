import React, { useState } from "react";

// Stateful Component
export default function StatelessVsStateful() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ShowCount count={count}/>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

// Stateless Component
function ShowCount(props) {
  return (
    <div>
      <h1>Count: {props.count}</h1>
    </div>
  );
}
