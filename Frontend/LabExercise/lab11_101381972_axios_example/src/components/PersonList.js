import React, {Component} from 'react'
import axios from 'axios'
import './PersonList.css'

export default class PersonList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            persons: []
        }
    }

    getPersons = async() => {
        const personUrl = "https://randomuser.me/api/?results=10"
        try {
            const response = await axios.get(personUrl)
            console.log(response.data.results)
            this.setState({persons: response.data.results})
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() { 
        this.getPersons()
    }

    render() {
        return (
            <div className="container">
                <h3 className="header">User List</h3>
                {this.state.persons.map((person, index) => (
                    <div key={index} className="card">
                        <div className="card-header">
                            {person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}
                        </div>
                        <div className="profile-section">
                            <div>
                                <img
                                    src={person.picture.large}
                                    alt={`${person.name.first} ${person.name.last}`}
                                    className="profile-pic"
                                />
                                <div className="profile-button-container">
                                    <button className="details-button">Details</button>
                                </div>
                            </div>
                            <div className="info-section">
                                <p><strong>User Name:</strong> {person.login.username}</p>
                                <p><strong>Gender:</strong> {person.gender.toUpperCase()}</p>
                                <p><strong>Time Zone Description:</strong> {person.location.timezone.description}</p>
                                <p><strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</p>
                                <p><strong>Email:</strong> {person.email}</p>
                                <p><strong>Birth Date and Age:</strong> {new Date(person.dob.date).toLocaleDateString()} ({person.dob.age})</p>
                                <p><strong>Register Date:</strong> {new Date(person.registered.date).toLocaleDateString()}</p>
                                <p><strong>Phone:</strong> {person.phone}</p>
                                <p><strong>Cell:</strong> {person.cell}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
