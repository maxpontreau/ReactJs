import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrainingList from './TraningList/TrainingList';
import {ConnectionContainer} from "./ConnectionContainer/ConnectionContainer";


function App(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <ConnectionContainer>
                <TrainingList />
            </ConnectionContainer>
        </div>
    );
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/

export default App;