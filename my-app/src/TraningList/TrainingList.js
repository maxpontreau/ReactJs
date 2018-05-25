import React from 'react';
import TrainingListItem from './TrainingListItem/TrainingListItem';
import TrainingTitle from './TrainingTitle/TrainingTitle';

function TrainingList(props) {

    const listItems = [
            {
                id: 1,
                name: 'React.js'
            },
            {
                id: 2,
                name: 'React Native'
            },
            {
                id: 3,
                name: 'Angular'
            },
            {
                id: 4,
                name: 'TypeScript'
            }
        ]

    return (
        <ul className="App-intro">
            <TrainingTitle name="Formations :" />
            <TrainingListItem listItems={listItems}/>
        </ul>
    );
}

export default TrainingList;