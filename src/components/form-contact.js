import React from "react"
import { Component } from "react"
import { css } from '@emotion/core';


class FormContact extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {value: ''}
    }


render () {
    return (
    <form>
        Name
        <input type="text" name="name" required />
        Email
        <input type="email" name="reply_to" required />
        Message:
        <textarea name="message" required></textarea>
    <button type="submit">Send Message</button>
    </form>
    )
  }
}
  export default FormContact
  