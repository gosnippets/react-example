import React, { Component } from 'react'
import BankProcess from './BankProcess';

export default class BankInput extends Component {
    constructor() {
        super();
        this.state = { totalAmount: 5000, showBalance: false, inputAmount: 0 }
    }

    handleInput = (e) => {
        this.setState({ inputAmount: e.target.value })
    }

    withdrawal = () => {
        console.log(this.state.inputAmount)
        var amount = this.state.totalAmount - parseInt(this.state.inputAmount)
        this.setState({ inputAmount: 0, totalAmount: amount })
    }

    deposite = () => {
        console.log(this.state.inputAmount)
        var amount = this.state.totalAmount + parseInt(this.state.inputAmount)
        this.setState({ inputAmount: 0, totalAmount: amount })
    }

    balance = () => {
        this.setState({ showBalance: true })
    }

    render() {

        return (
            <>
                <h1>Total Amount: {this.state.showBalance && (this.state.totalAmount)}</h1>
                <input type="number" placeholder='Please enter amount' value={this.state.inputAmount} onChange={(e) => this.handleInput(e)} />
                <BankProcess increment={this.deposite} decrement={this.withdrawal} balance={this.balance} />
            </>

        )
    }
}
