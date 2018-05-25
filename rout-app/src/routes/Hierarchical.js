import React from 'react';
import {Route} from 'react-router-dom';

export function SubRoute({match}) {
    return (<div><h1>{`${match.params.name} sub route`}</h1></div>)
}

export const Hierarchical = ({match}) => {
    return (
    <div>
        <h1>Hierarchical route</h1>
        <div>
            <Route path={`${match.path}/:name`} component={SubRoute}/>
            <Route path={match.path} render={() => (<h3>Always display</h3>)}/>
        </div>
    </div>)
}