import React, { Component } from 'react';
import '../FormTP.css';

class ValidationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {canSubmit: false};
    }

    render() {
        return (
            <div className="formElement">
                <label  className="labelForm"/>
                <input className="inputForm" type="submit" value="Valider" disabled={!this.state.canSubmit}/>
            </div>
        );
    }
}

export default ValidationForm;