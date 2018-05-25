import React, { Component } from 'react';
import './TrainingTitle.css';
import PropTypes from 'prop-types';

class TrainingTitle extends Component {

    constructor(props) {
        super(props);
        this.state = {name: props.name};
    }

    render() {
        return (
        <li className="TrainingTitle">
            {this.state.name}
        </li>
        );
    }

    componentDidMount() {
        console.log(this.state.name);
    }

    shouldComponentUpdate() {
        console.log(this.state.name + "component update");
    }

}

TrainingTitle.propTypes = {
    name: PropTypes.integer
};

export default TrainingTitle; 