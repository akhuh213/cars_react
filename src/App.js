import React from 'react';
import logo from './tesla.png';
import './App.css';
import Tesla from './Tesla';
import Model_E from './Model_E'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        <a
          className="App-link"
          href="http://www.tesla.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Tesla />
      <Model_E/>
    </div>
  );
}

export default App;
