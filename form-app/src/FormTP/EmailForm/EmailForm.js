import React, { Component } from 'react';
import '../FormTP.css';

class EmailForm extends Component {

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
        console.log("submit email");
    }

    render() {
        return (
            <div className="formElement">
                <label className="labelForm" htlmfor="email">Email</label>
                <input className="inputForm" id="email" type="text" value={this.state.value} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default EmailForm;