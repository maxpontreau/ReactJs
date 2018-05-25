import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import {Home} from './routes/Home';
import {About} from './routes/About';
import {Contact} from './routes/Contact';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <ul>  
                    <li>
                        <NavLink to="/" activeClassName="selected">Home</NavLink>
                    </li>  
                    <li>
                        <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
                    </li>  
                    <li>
                        <NavLink to="/about" activeClassName="selected">About</NavLink>
                    </li>  
                </ul>
                <Route exact path="/" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/about" component={About}/>
            </div>
        </BrowserRouter>)
    }
}