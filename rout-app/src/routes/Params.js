import React from 'react';

export const Params = (props) => {
    return (
        <div>
            <h1>Params route</h1>
            <p>Paramètre : {props.match.params.custom}</p>
        </div>)
}