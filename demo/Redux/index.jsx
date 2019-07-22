import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import Reducer from './reducer'
import { add, sub } from './actions'

const Store = createStore(Reducer)

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: Store.getState().count
        }
        this.Add = this.Add.bind(this)
        this.Sub = this.Sub.bind(this)
    }

    Add() {
        Store.dispatch(add())
    }

    Sub() {
        Store.dispatch(sub())
    }

    componentDidMount() {
        console.log(Store.getState())
        Store.subscribe(() => this.setState({count: Store.getState().count}))
    }

    componentDidUpdate() {
        console.log('Redux' + Store.getState().count)
    }

    conponentWillUnmount() {
        // unsubscribe()
    }

    render() {
        return (
            <div>
                <button onClick={this.Add}>+</button>
                <span>{this.state.count}</span>
                <button onClick={this.Sub}>-</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
)