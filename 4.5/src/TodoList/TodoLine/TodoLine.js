import React, { Component } from 'react';
import './TodoLine.css';
import PropTypes from 'prop-types';

class TodoLine extends Component {
    constructor(props) {
        super(props);

        this.state = {title: props.title, isDone: props.isDone, delText:false }; /* ...props ? */
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        event.target.checked ? this.setState({delText:true}) : this.setState({delText:false});
    }

    render () {
        const title = this.state.delText ?
        (
            <del>
                {this.state.title}
            </del>
        ) : this.state.title;

        return (
            <tr className="todoLine">
                <th className="todoCell todoTitle">{title}</th>
                <th className="todoCell"><input id="checkBox" type="checkbox" onClick={this.onClickHandler}/></th>
            </tr>
        )
    }
}

TodoLine.propTypes = {
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
};

export default TodoLine;