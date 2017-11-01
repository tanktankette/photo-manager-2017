import React, { Component } from 'react'

export default class ContactRow extends Component {
  render () {
    const contact = this.props.contact
    return (
      <tr>
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
        <td>{contact.email}</td>
        <td>{contact.address}</td>
        <td>{contact.city}</td>
        <td>{contact.state}</td>
        <td>{contact.zip}</td>
        <td>{contact.country}</td>
        <td><img src={contact.avatar} style={{width: '50px'}} /></td>
      </tr>
    )
  }
}
