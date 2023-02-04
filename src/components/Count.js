import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <button onClick={this.props.decrement.bind(this)}>Decrement</button>
            <button onClick={this.props.increment.bind(this)}>Increment</button>
        </>)
    }
}
