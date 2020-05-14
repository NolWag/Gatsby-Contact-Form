import React from "react"
import { Component } from "react"
import { css } from '@emotion/core';


class FormContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        alert("Submitted" + this.state.value)
        e.preventDefault()
    }


render () {
    return (
    <form onSubmit={this.handleSubmit}>
        Name
        <input value={this.state.value} onChange={this.handleChange} type="text" name="name" required />
        {/* Email
        <input type="email" name="reply_to" required />
        Message:
        <textarea name="message" required></textarea> */}
    <input type="submit" value="Submit" />
    </form>
    )
  }
}

export default FormContact
  