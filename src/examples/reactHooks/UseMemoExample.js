import React, { useMemo, useState } from 'react'

const initTodo = [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
    { id: 3, title: "Todo 3", completed: false }
]

export default function UseMemoExample() {
    const [count, setCount] = useState(0)
    const [todos, setTodo] = useState(initTodo)
    const calculation = useMemo(() => calculate(count), [count])

    const addTodo = () => {
        setTodo([...todos, { id: 4, title: "Todo 4", completed: false }])
    }

    return (
        <div>
            <h2>Calculation: {calculation}</h2>
            <h2>Todo List</h2>
            {todos && todos.map((todo, key) => (
                <p key={key}>{todo.title}</p>
            ))}
            <button onClick={addTodo}>Add Todo</button>
            <hr />

            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    )
}

const calculate = (num) => {
    console.log("calling...", num)
    return num += 1;
}