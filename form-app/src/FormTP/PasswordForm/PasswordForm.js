import React, { Component } from 'react';
import '../FormTP.css';

class PasswordForm extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log("submit password");
    }

    render() {
        return (
            <div className="formElement">
                <label className="labelForm" htmlFor="password">Mot de passe</label>
                <input className="inputForm" id="password" type="password" value={this.state.value} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default PasswordForm;