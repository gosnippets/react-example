import React, { Component } from 'react'

export default class BankProcess extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <button onClick={()=>this.props.decrement()}>Withdrawal</button>
            <button onClick={()=>this.props.increment()}>Deposite</button>
            <button onClick={()=>this.props.balance()}>Check Balance</button>
        </>)
    }
}


// Calculator
// 0-9
// C clear the field value
// + , -, *, /
// = 

// Life cycle method of class components