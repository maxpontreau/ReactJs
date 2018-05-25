import React, { Component } from 'react';
import './IsOnlineLabel.css';

class IsOnlineLabel extends Component {
    constructor(props) {
        super(props);

        this.state = {isOnline: navigator.onLine};
        window.addEventListener("offline", () => this.setState({isOnline: navigator.onLine}), false);
        window.addEventListener("online", () => this.setState({isOnline: navigator.onLine}), false);
    }

    render() {
        return (
        <div className="isOnlineLabel">
            {this.state.isOnline ? "En ligne" : "Hors ligne"}
        </div>
        );
    }

    componentDidMount() {
        console.log(this.state.isOnline);
    }
}

export default IsOnlineLabel;