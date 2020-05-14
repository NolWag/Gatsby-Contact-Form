import React from "react"
import { Component } from "react"
import { css } from '@emotion/core';


// class FormContact extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             email: '',
//             message: ''
//         }

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
    
//     }

//     handleChange(e) {
//         const stateName = e.target.name
//         this.setState({stateName: e.target.value})
//     }

//     handleSubmit(e) {
//         alert("Submitted" + this.state.name)
//         e.preventDefault()
//     }


// render () {
//     return (
//     <form onSubmit={this.handleSubmit}>
//         Name
//         <input value={this.state.name} onChange={this.handleChange} type="text" name="name" required />
//         Email
//         <input value={this.state.email} onChange={this.handleChange} type="text" name="email" required />
//         Message
//         <textarea value={this.state.message} onChange={this.handleChange} name="message" required></textarea>
//     <input type="submit" value="Submit" />
//     </form>
//     )
//   }
// }

function FormContact() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: ""
  })

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
    <form>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
      </label>
      {state.firstName}
      {state.lastName}
    </form>
  );
}


export default FormContact
  