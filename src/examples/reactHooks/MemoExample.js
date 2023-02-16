import React, { memo, useState } from 'react'

const initTodo = [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
    { id: 3, title: "Todo 3", completed: false }
]

export default function MemoExample() {
    const [count, setCount] = useState(0)
    const [todos, setTodo] = useState(initTodo)
    return (
        <div>
            <Todo todos={todos} /><hr />
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Count</button>
            <button onClick={() => setTodo([...todos, { id: 4, title: "Todo 4", completed: false }])}>Add Todo</button>
        </div>
    )
}

const Todo = memo(({ todos }) => {
    console.log("Child Component")
    return (<>
        <h2>Todo List</h2>
        {todos && todos.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
        ))}
    </>)
})
