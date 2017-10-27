import React, { Component } from 'react'
import ContactTable from './ContactTable'
import './App.css'

const fetch = require('node-fetch')

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render () {
    console.log('rendering')
    if (this.state.data.length > 0) {
      console.log(this.state.data)
      return (
        <div className='App'>
          <ContactTable contacts={this.state.data} />
        </div>
      )
    } else {
      return (
        <div className='App'>
          <p>Loading</p>
        </div>
      )
    }
  }

  componentWillMount () {
    fetch('https://test-c7f46.firebaseio.com/thing.json', {method: 'GET'}).then((pkg) => pkg.json())
      .then((pkg) => {
        this.setState({data: Object.values(pkg)})
      })
  }
}

export default App
