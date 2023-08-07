import React, { Component } from 'react';
import './FormList.scss';

export class FormList extends Component {
  render() {
    const { contacts} =this.props
    return (
      <div className='row py-5 d-flex justify-content-center'>
        <div className='col-8'>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <div key={contact.id} className='card p-3'>
                <p>{contact.firstName}</p>
                <p>{contact.lastName}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
              </div>
            ))
          ) : (
            <div className='d-flex justify-content-center'>
              <h2>No contacts</h2>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default FormList