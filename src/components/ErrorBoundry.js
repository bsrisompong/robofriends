import React, { Component } from 'react'


class ErrorBoundry extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        console.log({ error, info })
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1><span role="img" aria-label="">😵</span>Ooooooop, that's not good.</h1>
        }
        return (
            this.props.children
        )
    }
}

export default ErrorBoundry