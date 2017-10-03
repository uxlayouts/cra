import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';

class App extends Component {
  state = {
    there: "I'm from the state",
  }
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Starter</h1>
        </header>
        <p className="App-intro">
          <Display there={this.state.there} />
        </p>
    );
  }
}

export default App;
