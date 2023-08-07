import React, { Component } from 'react';
import './FormCom.scss';

export class FormCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         person: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
         }
      }
    }
    handleChange =(e) =>{
        this.setState({
            person:{
                ...this.state.person,
                [e.target.name]:e.target.name,
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.contacts.push({
          id: this.props.contacts.length + 1,
          ...this.state.person,
        });
        this.setState({
          person: {
            firstName: '',
            lastName: '',
            phone: '',
          },
        });
        console.log(this.props.contacts);
      };

  render() {
    // const {firstName, lastName, email, phone }= this.state.person;
    return (
     <div>
         <div className='row container d-flex justify-content-center py-5'>
        <div className='col-6'>
            <form className='w-full'  >
                <div className=''>
                    <label className='form-label' htmlFor="firstname">First name</label>
                    <input className='form-control mb-3' type="text" id='firstName' name='firstName'  onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor="lastname">Last name</label>
                    <input className='form-control mb-3' type="text" id='lastName' name='lastName' onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor="email">Email</label>
                    <input className='form-control mb-3' type="email" id='email' name='email'onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor="Phone">Phone number</label>
                    <input className='form-control mb-3' type="number" id='phone' name='phone'  onChange={this.handleChange}/>
                </div>
                <button className='btn btn-dark w-100 p-2' type='submit'>Add form</button>
            </form>
           
        </div>
        
      </div>
      <table className='table1 container'>
                <thead className='thead'>
                    <tr className='tr'>
                        <td>FirstName</td>
                        <td>LastName</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    <tr className='p-3'>
                        <th>Jone</th>
                        <th>Doe</th>
                        <th>jone123@email.com</th>
                        <th>885423232</th>
                        <th className='d-flex align-item-center gap-2 mb-3'>
                            <button className='btn btn-success px-3'>ADD</button>
                            <button className='btn btn-danger'>DELETE</button>
                        </th>
                    </tr>
                    <tr className=''>
                        <th>Jane</th>
                        <th>Smith</th>
                        <th>jane123@email.com</th>
                        <th>885445789</th>
                        <th className='d-flex align-item-center gap-2 mb-3'>
                            <button className='btn btn-success px-3' type='submit'>ADD</button>
                            <button className='btn btn-danger' type='submit'>DELETE</button>
                        </th>
                    </tr>
                    <tr className=''>
                        <th>Lina</th>
                        <th>Yana</th>
                        <th>lina123@email.com</th>
                        <th>885436754</th>
                        <th className='d-flex align-item-center gap-2 mb-3'>
                            <button className='btn btn-success px-3' type='submit'>ADD</button>
                            <button className='btn btn-danger' type='submit'>DELETE</button>
                        </th>
                    </tr>
                </tbody>
            </table>
     </div>
      
    )
  }
}

export default FormCom