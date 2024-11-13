import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = { // my professor says state is the variable
            users: []
        }
    }

    getUsers = async() => {
        const userUrl = "http://jsonplaceholder.typicode.com/users"
        try {
            const response = await axios.get(userUrl) // why do we need await for console to show result of promise?
            //console.log(response.data)
            this.setState({users: response.data})
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() { // what does componentDidMount do? especially in this case it's relation with axios.get
        this.getUsers()
        //this.setState({users: userData}) // what is this line doing? is it putting/renewing the value of users in state?
    }

    submitData = async () => {
        try {
            await axios.post("http://jsonplaceholder.typicode.com/users",
            {
                username: "admin",
                password: "pwd"
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h3>User List</h3>
                {
                    this.state.users.map(user => (
                        <p key={user.id}>
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                        </p>
                    ))
                }
                <button onClick={this.submitData}>Add</button>
            </div>
        )
    }
}
