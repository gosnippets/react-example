import React, { useReducer } from 'react'

const initTodo = [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
    { id: 3, title: "Todo 3", completed: false }
]

const reducer = (state, action) => {
    console.log("State", state, "Action", action)
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })
        case "DELETE":
            return state.filter((todo) => todo.id !== action.id)

        default:
            return state
    }
}

export default function UseReducerExample() {
    const [todos, dispatch] = useReducer(reducer, initTodo)

    const handleComplete = (id) => {
        dispatch({ type: "COMPLETE", id: id })
    }

    const handleDelete = (id) => {
        console.log("Clicked");
        dispatch({ type: "DELETE", id: id })
    }

    return (<>
        {todos && todos.map((todo) => (
            <div key={todo.id}>
                <label>
                    <input type="checkbox" checked={todo.completed} onChange={() => handleComplete(todo.id)} />
                    {todo.title}
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </label>
            </div>
        ))}
    </>)
}
