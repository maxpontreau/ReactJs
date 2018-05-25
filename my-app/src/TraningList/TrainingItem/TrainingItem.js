import React, { Component } from 'react';
import './TrainingItem.css';

class TrainingItem extends Component {

    constructor(props) {
        super(props);
        this.state = {name: props.name};
    }

    render() {
        return (
            this.state.name !== "Angular" &&
            <li className="TrainingItem" onClick={(e) => this.itemClicked(e)}>
                    {this.state.name}
            </li>
        );
    }

    componentDidMount() {
        console.log(this.state.name);
    }

    itemClicked(event) {
        alert(this.state.name);
        console.log(event.nativeEvent.type);
    }
}

export default TrainingItem;