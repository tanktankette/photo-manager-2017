import React, { Component } from 'react'
import ContactRow from './ContactRow'

export default class ContactTable extends Component {
  render () {
    let rows = []
    for (let [key, contact] of this.props.contacts) {
      rows.push(<ContactRow key={key} contact={contact} />)
    }
    return (
      <table>
        <tbody>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Street Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Country</th></tr>
          {rows}
        </tbody>
      </table>
    )
  }
}
