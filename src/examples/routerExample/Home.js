import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ConditionalRendering from '../ReactBasic/ConditionalRendering'
import ControlledAndUncontrolled from '../ReactBasic/ControlledAndUncontrolled'
import DynamicStyles from '../ReactBasic/DynamicStyles'
import HOC from '../ReactBasic/HOC'
import JSXExample from '../ReactBasic/JSXExample'
import ReactFragment from '../ReactBasic/ReactFragment'
import StatelessVsStateful from '../ReactBasic/StatelessVsStateful'
import CustomHookExample from '../reactHooks/CustomHookExample'
import MemoExample from '../reactHooks/MemoExample'
import ReactHooks from '../reactHooks/ReactHooks'
import UseCallBackExample from '../reactHooks/UseCallBackExample'
import UseContextExample from '../reactHooks/UseContextExample'
import UseMemoExample from '../reactHooks/UseMemoExample'
import UseReducerExample from '../reactHooks/UseReducerExample'
import UseRefExample from '../reactHooks/UseRefExample'
import ReduxExample from '../ReduxExample/ReduxExample'
import UserComponent from '../ReduxExample/UserComponent'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>This is Home page</h2>
                {/* <ReactHooks/> */}
                {/* <UseContextExample/> */}
                {/* <UseRefExample/> */}
                {/* <UseReducerExample /> */}
                {/* <MemoExample /> */}
                {/* <UseCallBackExample /> */}
                {/* <UseMemoExample /> */}
                {/* <CustomHookExample /> */}
                {/* <JSXExample /> */}
                {/* <ConditionalRendering /> */}
                {/* <StatelessVsStateful /> */}
                {/* <ControlledAndUncontrolled /> */}
                {/* <ReactFragment /> */}
                {/* <HOC /> */}
                {/* <DynamicStyles /> */}
                {/* <ReduxExample /> */}
                <UserComponent />

            </div>
        )
    }
}
