import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

function App() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <span>School dashboard</span>
    </header>
  );
}

export default App;
