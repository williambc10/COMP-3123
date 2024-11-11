import React, { Component } from 'react';
import './Register.css';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fullName: "",
            address1: "",
            address2: "",
            city: "",
            province: "",
            postalCode: "",
            agreeTerms: false
        };
        this.provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'New Foundland and Labrador',
                            'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan']; 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({
            [name]: type === "checkbox" ? checked : value
        });
    };

    render() {
        return (
            <>
                <div className="form-container">
                    <h2>Data Entry Form</h2>
                    <form onSubmit={this.handleSubmit} className="data-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Email</label>
                                <input type='email' name='email' placeholder='Enter email' onChange={this.handleInput} />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type='text' name='fullName' placeholder='Full Name' onChange={this.handleInput} />
                            </div>
                        </div>
                        <div className="form-row full-width">
                            <label>Address</label>
                            <input type='text' name='address1' placeholder='1234 Main St' onChange={this.handleInput} />
                        </div>
                        <div className="form-row full-width">
                            <label>Address 2</label>
                            <input type='text' name='address2' placeholder='Apartment, studio, or floor' onChange={this.handleInput} />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>City</label>
                                <input type='text' name='city' placeholder='City' onChange={this.handleInput} />
                            </div>
                            <div className="form-group">
                                <label>Province</label>
                                <select name='province' onChange={this.handleInput}>
                                    <option value="">Choose...</option>
                                    {this.provinces.map(prov => (
                                        <option key={prov} value={prov}>{prov}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Postal Code</label>
                                <input type='text' name='postalCode' placeholder='Postal Code' onChange={this.handleInput} />
                            </div>
                        </div>
                        <div className="checkbox-row">
                            <input type="checkbox" name="agreeTerms" onChange={this.handleInput} />
                            <label>Agree Terms & Condition?</label>
                        </div>
                        <button type='submit' className="submit-btn">Submit</button>
                    </form>
                </div>

                <div className="entered-info">
                    <h3>Entered Information:</h3>
                    <p>Email: {this.state.email}</p>
                    <p>Full Name: {this.state.fullName}</p>
                    <p>Address: {this.state.address1}</p>
                    <p>City: {this.state.city}</p>
                    <p>Province: {this.state.province}</p>
                    <p>Postal Code: {this.state.postalCode}</p>
                </div>
            </>
        );
    }
}