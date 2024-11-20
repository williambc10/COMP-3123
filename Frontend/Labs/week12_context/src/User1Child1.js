//Child of User 1 {grandchild of UserContext}
import React, { Component } from 'react'
import UserContext from './UserContext'

export default class User1Child1 extends Component {

    static contextType = UserContext;

    constructor(props) {
        super(props)
        this.state = {
            ...this.context
        }
    }

    componentDidMount = () => {
        let userCtx = this.context
        console.log(userCtx)
    }

    handleChange = (e) => {
        e.preventDefault()
        this.context.fnm = 'GBC'
        console.log(this.context)
    }

    render() {
        return (
        <div>
            <h2> User1 Child1 -- Child 1</h2>
            <p>User Context: { JSON.stringify(this.context)}</p>
            <button onClick={ (e) => this.context.sayHello() } >Call Hello Context</button>
            <button onClick={ this.handleChange } >Change First Name Context</button>
        </div>
        )
    }
}
