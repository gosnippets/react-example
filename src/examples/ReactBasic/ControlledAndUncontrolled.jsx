import React, { useRef } from "react";
import { useState } from "react";

export default function ControlledAndUncontrolled() {
  return (
    <div>
      <ControlledComponent />
      <UnControlledComponent />
      <ControlledComponent2/>
      <UnControlledComponent2 />
    </div>
  );
}

const ControlledComponent = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h2>Controlled component</h2>
      <h2>Value: {value}</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const UnControlledComponent = () => {
  const inputRef = useRef();
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <h2>UnControlled component</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const ControlledComponent2 = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h2>Controlled component</h2>
      <h2>Value: {value}</h2>
      <select value={value} onChange={(e)=>setValue(e.target.value)}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
  );
};

const UnControlledComponent2 = () => {
  const selectRef = useRef();
  const handleSubmit = () => {
    console.log(selectRef.current.value);
  };
  return (
    <div>
      <h2>UnControlled component</h2>
      <form onSubmit={handleSubmit}>
        <select ref={selectRef}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
