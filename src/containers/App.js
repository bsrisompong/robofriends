import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
// import { robots } from './robots'
import ErrorBoundry from '../components/ErrorBoundry'
import 'tachyons'
import './App.css'

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => {
  return {
    // searchField: state.searchField
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,

  }
}

const mapDiscpatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    // onRequestRobots: () => requestRobots(dispatch) // *A
    onRequestRobots: () => dispatch(requestRobots()) // *B
  }
}


class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     // search: ''
  //   }
  // }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => {
    //     console.log({ users })
    //     this.setState({ robots: users })
    //   });
    this.props.onRequestRobots()

  }

  // // onSearchChange(event) {
  // onSearchChange = event => {
  //   // arrow function make this bound to its parent
  //   this.setState({ search: event.target.value })
  // }

  render() {
    // const { robots, search } = this.state
    // const { robots } = this.state
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(item => {
      return item.name.toLowerCase().includes(searchField.toLowerCase())
    })
    // if (robots.length === 0) {
    if (isPending) {
      return <h1>Loading</h1>
    }
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <ErrorBoundry>

          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </div>
    )
  }
}



export default connect(mapStateToProps, mapDiscpatchToProps)(App)
