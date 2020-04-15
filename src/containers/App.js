import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
// import { robots } from './robots'
import ErrorBoundry from '../components/ErrorBoundry'
import 'tachyons'
import './App.css'
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        console.log({ users })
        this.setState({ robots: users })
      });

  }

  // onSearchChange(event) {
  onSearchChange = event => {
    // arrow function make this bound to its parent
    this.setState({ search: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(item => {
      return item.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    }
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ErrorBoundry>

          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </div>
    )
  }
}

export default App
