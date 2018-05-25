import React, { Component } from 'react';
import './TrainingListItem.css';
import TrainingItem from '../TrainingItem/TrainingItem';

class TrainingListItem extends Component {

    constructor(props) {
        super(props);
        const listDOMItems =  props.listItems.map((item) => <TrainingItem name={item.name} key={item.id}/>);
        this.state = {listDOMItems: listDOMItems};
    }

    render() {
        return (
            <React.Fragment>
                {this.state.listDOMItems}
            </React.Fragment>
        );
    }
}

export default TrainingListItem;