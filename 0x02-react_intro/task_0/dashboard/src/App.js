import React from 'react';
import logo from './logo_holberton.jpg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>School dashboard</span>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
