import React, { Component } from 'react'

export default class ApiFetchExample extends Component {
    constructor() {
        super()
        this.state = { userList: [], todoData: {}, userDetails:{} }
    }

    componentDidMount() {
        this.getUser(); // GET Method to call single details
        // this.getUsers(); //GET Method
        // this.postTodo(); // POST Method
        // this.putTodo();
        this.deleteUser()
    }

    getUser = () => {
        fetch("https://jsonplaceholder.typicode.com/users/2")
            .then((res) => {
                return res.json()
            }).then((json) => {
                console.log("Single user",json)
                this.setState({ userDetails: json })
            }).catch((err) => {
                console.log("Error", err);
            })
    }

    getUsers = () => {
        const headerData = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "your token"
            }
        }

        fetch("https://jsonplaceholder.typicode.com/users", headerData)
            .then((res) => {
                return res.json()
            }).then((json) => {
                console.log(json)
                this.setState({ userList: json })
            }).catch((err) => {
                console.log("Error", err);
            })
    }

    postTodo = () => {
        const headerData = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "your token",
                "my-header": "This is my header"
            },
            body: JSON.stringify({ "userId": 1, "title": "This is my Title", "completed": false })
        }

        fetch("https://jsonplaceholder.typicode.com/todos", headerData)
            .then((res) => {
                return res.json()
            }).then((json) => {
                console.log(json)
                this.setState({ todoData: json })
            }).catch((err) => {
                console.log("Error", err);
            })
    }

    putTodo = () => {
        const headerData = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "your token",
                "my-header": "This is my header"
            },
            body: JSON.stringify({ "userId": 1, "title": "This is my Title2", "completed": false })
        }

        fetch("https://jsonplaceholder.typicode.com/todos/201", headerData)
            .then((res) => {
                return res.json()
            }).then((json) => {
                console.log(json)
                this.setState({ todoData: json })
            }).catch((err) => {
                console.log("Error", err);
            })
    }

    deleteUser = () => {
        const headerData = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "your token",
                "my-header": "This is my header"
            }
        }

        fetch("https://jsonplaceholder.typicode.com/users/2", headerData)
            .then((res) => {
                return res.json()
            }).then((json) => {
                console.log("Single user",json)
            }).catch((err) => {
                console.log("Error", err);
            })
    }

    render() {
        const { userList, todoData, userDetails } = this.state;
        return (
            <div>
                {userList.map((user, key) => (
                    <p><span>{user.id}. </span>{user.name}</p>
                ))}
                <div>
                    {todoData.id} {todoData.title}
                </div>
                
                <div>
                   User detials:  {userDetails.id} {userDetails.name}
                </div>
            </div>
        )
    }
}
