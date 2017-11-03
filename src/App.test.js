/* global it */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const fetchMock = require('fetch-mock')
// const makeRequest = require('./make-request')

fetchMock.get('*', [['safdas', { address: '1842 Maureen Streets', avatar: 'data:image/png;base64,iVBORw0KGgoAA…', city: 'Lake Patience', country: 'Iraq', email: 'Yasmine.Jerde42@hotmail.com', firstName: 'Clemmie', lastName: 'Emmerich', passwordHash: '8871b49a58bb0327e73d7cf21a7c41a6', state: 'Rhode Island', zip: '46561' }]])

it('renders without crashing', done => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  setImmediate(() => {
    done()
  })
})
