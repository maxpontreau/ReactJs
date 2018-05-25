import React, { Component } from 'react';
import '../FormTP.css';

class ConfirmPasswordForm extends Component {

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
        console.log("submit confirm");
    }

    render() {
        return (
            <div className="formElement">
                <label className="labelForm" htmlFor="confirmPassword">Confirmation</label>
                <input className="inputForm" id="confirmPassword" type="password" value={this.state.value} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default ConfirmPasswordForm;