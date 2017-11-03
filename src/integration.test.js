/* global it describe beforeEach afterEach expect */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const fetchMock = require('fetch-mock')

Enzyme.configure({ adapter: new Adapter() })

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'test.txt')

// fetchMock.get('*', [['safdas', { address: '1842 Maureen Streets', avatar: 'data:image/png;base64,iVBORw0KGgoAA…', city: 'Lake Patience', country: 'Iraq', email: 'Yasmine.Jerde42@hotmail.com', firstName: 'Clemmie', lastName: 'Emmerich', passwordHash: '8871b49a58bb0327e73d7cf21a7c41a6', state: 'Rhode Island', zip: '46561' }]])

const data = fs.readFileSync(filePath, {encoding: 'utf-8'})

describe('Integration-testing', () => {
  let app
  beforeEach(done => {
    fetchMock.get('*', data)
    app = mount(<App />)
    setImmediate(() => {
      done()
    })
  })

  afterEach(() => {
    fetchMock.restore()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('renders the right amount of data in every row', () => {
    const userRows = app.render().find('.user')
    for (let user of Object.values(userRows)) {
      if (user.type === 'tag') {
        expect(user.children.length).toBe(9)
      }
    }
    // console.log(userRows)
  })

  it('renders the right amount of users', () => {
    const userRows = app.render().find('.user').length
    expect(userRows).toBe(100)
  })
})
