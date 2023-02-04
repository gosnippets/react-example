import React, { Component } from 'react'
import Count from './Count';

export default class User extends Component {
    constructor() {
        super();
        this.state = { name: "", count:0 }
    }

    submitHandler = () => {
        this.setState({ [this.refs.name.name]: this.refs.name.value })
        this.setState({ [this.refs.age.name]: this.refs.age.value })

    }

    showName = (username) => {
        this.setState({name:username})
    }

    decrementFunc=()=> {
        this.setState({count: this.state.count-1})
    } 

    incrementFunc=()=> {
        this.setState({count: this.state.count+1})
    } 

    // onChangeHandler=(e) =>{
    //     this.setState({[e.target.name]:e.target.value})
    // }

    render() {
        return (
            <>
                {/* <h2>Name: {this.state.name}</h2>
                <h2>Age: {this.state.age}</h2>

                <input type="text" name="name" ref="name" />
                <input type="number" name='age' ref="age" /> */}

                {/* <input type="text" name="name" placeholder='Enter name' onChange={(e)=> this.onChangeHandler(e)}/>
      <input type="number" name='age' placeholder='Age' onChange={this.onChangeHandler.bind(this)}/> */}

                {/* <button onClick={this.submitHandler.bind(this)}>Show Name</button> */}

                {/* <Count name={this.state.name} showname={this.showName}/>
                <button onClick={this.showName.bind(this, "Surya")}>Show Name User</button> */}

            <h2>Count value : {this.state.count}</h2>
            <Count decrement={this.decrementFunc} increment={this.incrementFunc}/>

            </>

        )
    }
}


// state = {totalAmount: 20000}
// Component 1
// Bank
// create input field
// Show Total Amount


// Component 1
// Withdrawal
// Deposite
// Show Total Amount