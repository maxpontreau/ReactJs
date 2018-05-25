import React from 'react';
import {Route, NavLink} from 'react-router-dom';

export function SubRoute({match, location}) {
    console.log(match);
    return (
        <div>
            <h1>{`${match.params.name} ${location.state.pseudo}`}</h1>
        </div>)
}

const contactList = [
    {name: "lanister",
     pseudo: "Tyrion"},

    {name: "targarien",
    pseudo: "Daanerys"}
    ]

const listDOMContact =  contactList.map((contact) =>
    <li>
        <NavLink to={{pathname: '/contact/' + contact.name, state: { pseudo: contact.pseudo }}}>
            {contact.name}
        </NavLink>
    </li>);

export const Contact = ({match}) =>  (
    <div>
        <ul>
            <Route path={match.path} render={() => (           listDOMContact         )}/>
        </ul>
        <Route path={`${match.path}/:name`} component={SubRoute}/>
    </div>
)
