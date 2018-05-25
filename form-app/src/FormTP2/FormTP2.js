import React, { Component } from 'react';

class FormTP2 extends Component {

    constructor(props) {  
        super(props);
        this.state = {email: '', emailValidation: false, password: '', passwordValidation: false, confirmPassword: '', confirmPasswordValidation: false, canSubmit: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.manageCkeced = this.manageCkeced.bind(this);

    }

    handleChange(event) {
        switch(event.target.id) {
            case 'email':
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                this.setState(
                    {
                        email: event.target.value,
                        emailValidation: regex.test(String(event.target.value).toLowerCase())
                    },
                    () => this.manageCkeced()
                    );
                break;
            case 'password':
                this.setState({
                    password: event.target.value,
                    passwordValidation: event.target.value.length === 4
                },
                    () => this.manageCkeced()
                );
                break;
            case 'confirmPassword':
                this.setState({
                        confirmPassword: event.target.value,
                        confirmPasswordValidation: event.target.value === this.state.password
                    },
                    () => this.manageCkeced());
                break;
            default:
                console.log("Unexpected handleChange");
        }


    }

    manageCkeced () {
        this.setState({canSubmit: this.state.emailValidation && this.state.passwordValidation && this.state.confirmPasswordValidation});
    }

    handleSubmit(event) {
        console.log("submit email");
    }

    render() {
        return (
            <form className="formTP">
                <div className="formElement">
                    <label className="labelForm" htlmfor="email">Email</label>
                    <input className="inputForm" id="email" type="text" value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="formElement">
                    <label className="labelForm" htmlFor="password">Mot de passe</label>
                    <input className="inputForm" id="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <div className="formElement">
                    <label className="labelForm" htmlFor="confirmPassword">Confirmation</label>
                    <input className="inputForm" id="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange}/>
                </div>
                <div className="formElement">
                    <label  className="labelForm"/>
                    <input className="inputForm" type="submit" value="Valider" disabled={!this.state.canSubmit}/>
                </div>
            </form>
        );
    }
}

export default FormTP2;