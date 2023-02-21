import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CounterSlice";

export default function ReduxExample() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1> Count : {count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Increment</button>
    </div>
  );
}
