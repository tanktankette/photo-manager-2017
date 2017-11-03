import React, { Component } from 'react'
import ContactTable from './ContactTable'
import './App.css'

require('es6-promise').polyfill()
require('isomorphic-fetch')

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
    /* global fetch */
    
    fetch('https://test-c7f46.firebaseio.com/thing.json')
      .then((pkg) => pkg.json())
      .then((pkg) => {
        this.setState({data: Object.entries(pkg)})
      })
      .catch(console.log)
  }
}

export default App
