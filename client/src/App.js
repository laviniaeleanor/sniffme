import React, { Component } from 'react';
import Page from './components/Page'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sniff me</h1>
        </header>
        <Page />
      </div>
    );
  }
}

export default App;
