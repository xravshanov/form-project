import React, { Component } from 'react';
import './Contacts.scss';

import FormCom from '../component/../FormCom/FormCom';
import FormList from '../FormList/FormList';

export class Contacts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         contacts: [],
      };
    }

    componentDidMount(){
        this.setState({
            contacts: this.state.contacts,
        });
    }
  render() {
    const {contacts}=this.state;
    return (
        
      <div>
        <FormCom contacts = {contacts}/>
        <FormList contacts ={contacts}/>
      </div>
    )
  }
}

export default Contacts