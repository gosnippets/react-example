import React, { createContext, useContext, useState } from 'react'

const MyContext = createContext();

export default function UseContextExample() {
    const [username, setUsername] = useState("Ravi")
    return (
        <MyContext.Provider value={username}>
            <ChildComponent1 />
        </MyContext.Provider>
    )
}


function ChildComponent1() {
    return (
        <div>
            <ChildComponent2 />
        </div>
    )
}


function ChildComponent2() {
    const username = useContext(MyContext);
    console.log("ChildComponent2", username)
    return (
        <div>
            <ChildComponent3 />
        </div>
    )
}


function ChildComponent3() {
    const username = useContext(MyContext);

    console.log("ChildComponent3", username)
    return (
        <div>
            <h2>Username: {username}</h2>
        </div>
    )
}