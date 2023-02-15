import React, { useEffect, useRef, useState } from 'react'

export default function UseRefExample() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0)

    console.log("Count", count)
    useEffect(() => {
        count.current = count.current + 1;
    })

    return (
        <div>{console.log("Rander UseRefExample1")}
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h2>Count: {count.current}</h2>
            <UseRefExample2 />
            <UseRefExample3 />
        </div>
    )
}

function UseRefExample2() {
    const inputEl = useRef("")
    const handleInput = () => {
        console.log(inputEl.current, inputEl.current.value)
        inputEl.current.value = "Surya";
        inputEl.current.focus();
    }
    return (

        <div>{console.log("Rander")}
            <input type="text" placeholder='Enter username' ref={inputEl} />
            <button onClick={handleInput}>Click Here</button>
            <br/>
        </div>
    )
}

function UseRefExample3() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("")

    useEffect(()=>{
        previousInputValue.current = inputValue;
        console.log("useEffect")
    });

    return (
        <div>{console.log("Rander UseRefExample3")}
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
            <input type="text" placeholder='Enter username' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            
        </div>
    )
}