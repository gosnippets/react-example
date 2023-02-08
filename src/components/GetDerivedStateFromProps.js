import React, { Component } from 'react'

export default class GetDerivedStateFromProps extends Component {
    constructor() {
        super();
        this.state = { show: false, error: false }
    }
    // static getDerivedStateFromError(error) {
    //     console.log("getDerivedStateFromError")
    //     return { error: true }
    // }

    componentDidCatch(error,info){
        console.log("componentDidCatch", info)
        this.setState({ error: true })
    }

    render() {
        return (
            <div>
                {/* <h2>Hello World</h2>
                <button onClick={() => this.setState({ show: true })}>Show Username</button> */}
                {this.state.error ? "Somethings went worng" : <ShowUsername username="newUsername" />}
            </div>
        )
    }
}


class ShowUsername extends Component {
    render() {
        return (
            <div>{this.state.data}</div>
        )
    }
}


class Show extends Component {
    constructor() {
        super();
        this.state = { username: "prviousUsername" }
        console.log("constructor")
    }

    // componentDidMount() {
    //     this.setState({ username: this.props.username })
    // }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("GetDerivedStateFromProps", props, state)
    //     return { username: props.username }
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("getSnapshotBeforeUpdate", prevProps, prevState)
    //     document.getElementById("previous").innerHTML = "Previous Username: " + prevState.username
    //     return true;
    // }

    // componentDidUpdate() {
    //     console.log("componentDidUpdate")        
    //     document.getElementById("new").innerHTML = "New Username: " + this.state.username

    // }


    render() {
        console.log("Render")
        // return (
        //     <div>
        //         <h1>Username : {this.state.username}</h1>
        //         <h2 id="previous">Previous Username:</h2>
        //         <h2 id="new">New Username:</h2>
        //     </div>
        // )

        return <h2>{this.state.data}</h2>
    }
}
