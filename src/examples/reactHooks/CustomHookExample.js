import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useName(initValue) {
    const [value, setValue] = useState(initValue);
    function setName(newName) {
        setValue(newName);
    }
    return [value, setName]
}

function useFetchData(url, page, perPage) {
    const [data, setData] = useState(null);
    const [newdata, setNewData] = useState(null);

    useEffect(() => {
        axios.get(url).then((res) => { setData(res.data) })
    }, [20])

    useEffect(() => {
        if (data) getData(page)
    }, [data])

    function getData(page) {
        console.log("Page", page);
        const offset = perPage * (page - 1);
        const totalPage = Math.ceil(data.length / perPage)
        const newPageData = data.slice(offset, page * perPage)

        console.log("Total Page", totalPage)
        setNewData({
            previousPage: page - 1 ? page - 1 : null,
            nextPage: (totalPage > page) ? page + 1 : null,
            total: data.length,
            totalPage: totalPage,
            data: newPageData
        }

        )
    }

    return [newdata, getData]
}


export default function CustomHookExample() {
    const [count, setCount] = useState(0)
    const [name, setName] = useName("Ram");
    const [data, getData] = useFetchData("https://jsonplaceholder.typicode.com/todos", 1, 20);

    const showName = () => {
        setName("Ravi");
        console.log(data);
    }

    const handlePagination = (page) => {
        getData(page)
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <h2>{name}</h2>
            <button onClick={showName}>Show Name</button>

            {data && data.data && data.data.map((todo) => (
                <p key={todo.id}>{todo.id} {todo.title}</p>
            ))}
            {data && (<>
                <button onClick={() => handlePagination(data.previousPage)} disabled={!data.previousPage}>Previous Data</button>
                <button onClick={() => handlePagination(data.nextPage)} disabled={!data.nextPage}>Next Data</button>
            </>)}
        </div>
    )
}
