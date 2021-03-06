import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogProducer from './LogProducer'
import LogResumer from './LogResumer'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">a log sample for ugly store.</h1>
    </header>
    <LogProducer />
    <LogResumer />
  </div>
);

export default App;
