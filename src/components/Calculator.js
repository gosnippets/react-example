import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = { result: "0", inputs: "" }
    }

    insert = (text) => {
        this.setState({ inputs: this.state.inputs + text })
        this.setState({ result: this.state.inputs + text })
    }

    clear = () => {
        this.setState({ result: "0", inputs: "" })
    }

    showResult = () => {
        this.setState({result: eval(this.state.inputs)})
    }



    render() {
        return (
            <div>
                <h2>{this.state.result}</h2>

                <button onClick={() => this.clear()}>Clear</button>
                <button onClick={() => this.insert("0")}>0</button>
                <button onClick={() => this.insert("1")}>1</button>
                <button onClick={() => this.insert("2")}>2</button>
                <button onClick={() => this.insert("3")}>3</button>
                <br />
                <button onClick={() => this.insert("4")}>4</button>
                <button onClick={() => this.insert("5")}>5</button>
                <button onClick={() => this.insert("6")}>6</button>
                <button onClick={() => this.insert("7")}>7</button>
                <button onClick={() => this.insert("8")}>8</button>
                <button onClick={() => this.insert("9")}>9</button>

                <br />
                <button onClick={() => this.insert("+")}>+</button>
                <button onClick={() => this.insert("-")}>-</button>
                <button onClick={() => this.insert("*")}>*</button>
                <button onClick={() => this.insert("/")}>/</button>
                <button onClick={() => this.showResult()}>=</button>
            </div>
        )
    }
}
