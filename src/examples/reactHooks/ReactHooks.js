import React, { useEffect, useState } from 'react'

const userList1 = [
    { id: 1, name: "Surya", contact: "34484949" },
    { id: 2, name: "Ravi", contact: "4565456" }
]

export default function ReactHooks() {
    const [count, setCount] = useState(0)
    const [isValid, setIsValid] = useState(false)
    const [name, setName] = useState("")
    const [userDetails, setUserDetails] = useState({ id: 1, name: "Surya", contact: "34484949" })
    const [userList, setUserList] = useState(userList1)
    console.log("userList", userList);

    return (<>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Count</button>
        <h2>Name : {name}</h2>

        {/* <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <h2>Name : {name}</h2>        
        <button onClick={()=>setName("Ravi")}>Show name</button>
        <div>
            <h3>ID: {userDetails.id} Name :{userDetails.name} Contact : {userDetails.contact}</h3>
            <button onClick={()=>setUserDetails({id:1, name:"Ravi", contact:83948948})}>Show User deatils</button>
        </div>
        {userList && userList.map((user,key)=>(
            <h3 key={user.id}>ID: {user.id} Name :{user.name} Contact : {user.contact}</h3>
        ))} */}

        <EffectExample count={count} setName={setName}/>
    </>
    )
}


function EffectExample(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Surya")


    useEffect(() => {
        console.log("useEffect")
        console.log("Props", props);
    })

    useEffect(() => {
        console.log("useEffect")
        console.log("Props", props);
        setCount(props.count)
    },[props])

    useEffect(() => {
        console.log("empty useEffect")
    }, [name])

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={() => props.setCount(count + 1)}>Count</button>
            <h2>Name : {name}</h2>
            <button onClick={() => props.setName("Ravi")}>Show name</button>
        </div>
    )
}
