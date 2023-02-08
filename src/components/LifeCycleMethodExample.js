import React, { Component } from 'react'
import UserDetails from './UserDetails';

const users = [
    { username: "ravi", name: "Ravi Raushan", contact: 83484434 },
    { username: "surya", name: "Surya", contact: 83484434 },
    { username: "Shyam", name: "Shyam", contact: 83484434 },
];

export default class LifeCycleMethodExample extends Component {
    // Mounting  constructor componentDidMount render 
    // Updating   render componentDidUpdate shouldComponentUpdate
    // Unmounting  componentWillUnmount

    constructor() {
        super()
        console.log("constructor")
        this.state = { name: "Ram", delete: false }
    }


    // componentDidMount() {
    //     console.log("componentDidMount")
    //     // this.setState({ nameList: name })

    //     // setTimeout(() => {
    //     //     this.setState({ name: "Shyam" })
    //     // }, 2000)

    // }

    // componentDidUpdate(prevProps, prevStates) {
    //     console.log("componentDidUpdate", prevProps, prevStates)
    //     // if (prevStates.name !== this.state.name) {
    //     //     console.log("There is some change");
    //     // }
    // }

    // shouldComponentUpdate(prevProps, prevState) {
    //     if (prevState.name !== this.state.name) {
    //         return true;
    //     }
    //     // console.log("shouldComponentUpdate",prevProps, prevState)
    //     return false;
    // }

    

    render() {
        console.log("render")
        return (<>
            <div>{this.state.name}</div>
            <button onClick={() => this.setState({ name: "Surya" })}> Click here</button>
            {this.state.delete ? null : <UserDetails username="surya" users={this.state.users}/>}
            <button onClick={() => this.setState({ delete: true })}> Delete</button>
        </>)
    }
}

