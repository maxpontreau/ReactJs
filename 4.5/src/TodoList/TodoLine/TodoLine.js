import React, { Component } from 'react';
import './TodoLine.css';
import PropTypes from 'prop-types';

class TodoLine extends Component {
    constructor(props) {
        super(props);

        this.state = {title: props.title, isDone: props.isDone }; /* ...props ? */
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {

    }

    render () {
        return (
            <tr className="todoLine">
                <th className="todoCell todoTitle">{this.state.title}</th>
                <th className="todoCell"><input id="checkBox" type="checkbox" onClick={this.onClickHandler}> </input></th>
            </tr>
        )
    }
}

TodoLine.propTypes = {
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
};

export default TodoLine;