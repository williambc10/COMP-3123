import React, {Component} from 'react'

export default class Register extends Component {

    constructor (props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            city: ""
        }
        this.countries = ['USA', 'Canada', 'Mexico']
    }

    handleClick(e) { //e is for event as in event handler
        e.preventDefault()
        alert(`Hello World ${e.target.name}`)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleInput = (e) => {
        e.preventDefault()
        const {name, value} = e.target

        this.setState({
            ...this.state,
            [name]:value
        })

        console.log(`${this.state.firstName}`)
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    First Name: <input type='text' name='firstName' placeholder='Enter First Name' onChange={this.handleInput}></input> <br/>
                    Last Name: <input type='text' name='lastName' placeholder='Enter Last Name' onChange={this.handleInput}></input> <br/>
                    Country: <select name='country' onChange={this.handleInput}>
                        {
                            this.countries.map((cnm) => (
                                <option key={cnm}>{cnm}</option>
                            ))
                        }
                    </select>
                    City: <select name='city' onChange={this.handleInput}>
                            <option value='TOR'>Toronto</option>
                            <option value='NYC'>New York</option>
                            <option value='VNC'>Vancouver</option>
                        </select> <br/>
                    <input type='submit' value='Sign Up'></input>
                </form>
                <button value='TEST' name='btnSubmit' onClick={this.handleClick}>Submit</button>
                {<p>{this.state.firstName} {this.state.lastName}</p>}
                <p>{ JSON.stringify(this.state)}</p>
            </div>
        )
    }
}