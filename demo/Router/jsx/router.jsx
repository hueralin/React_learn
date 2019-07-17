import React from 'react'

export default class Router extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hash: window.location.hash
        }
        this.updateHash = this.updateHash.bind(this)
    }

    updateHash(e) {
        this.setState({hash: window.location.hash})
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.updateHash, false)
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.updateHash, false)
    }

    render() {
        const view = this.props.mapping[this.state.hash]
        if (view) {
            return view
        } else {
            return this.props.mapping['*']
        }
    }
}