import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactHooks from '../reactHooks/ReactHooks'
import UseContextExample from '../reactHooks/UseContextExample'
import UseRefExample from '../reactHooks/UseRefExample'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>This is Home page</h2>
                {/* <ReactHooks/> */}
                {/* <UseContextExample/> */}
                <UseRefExample/>
            </div>
        )
    }
}
