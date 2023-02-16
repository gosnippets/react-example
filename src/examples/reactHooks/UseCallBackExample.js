import React, { memo, useCallback, useState } from 'react'

const initTodo = [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
    { id: 3, title: "Todo 3", completed: false }
]

export default function UseCallBackExample() {
    const [count, setCount] = useState(0)
    const [todos, setTodo] = useState(initTodo)

    const addTodo = useCallback(()=>{
        setTodo([...todos, { id: 4, title: "Todo 4", completed: false }])
    },[todos])

    return (
        <div>
            <Todo todos={todos} addtodo={addTodo} /><hr />
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    )
}

const Todo = memo(({ todos, addtodo }) => {
    console.log("Child Component")
    return (<>
        <h2>Todo List</h2>
        {todos && todos.map((todo,key) => (
            <p key={key}>{todo.title}</p>
        ))}
        <button onClick={addtodo}>Add Todo</button>
    </>)
})
