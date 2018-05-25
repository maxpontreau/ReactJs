import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormTP2 from './FormTP2/FormTP2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <FormTP2 />
        </div>
      </div>
    );
  }
}

export default App;
