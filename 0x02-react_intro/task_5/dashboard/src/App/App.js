import React from 'react';
import logo from './logo_holberton.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils.js'

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>School dashboard</span>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">Email: </label>
          <input id="email" type="email"/>
        </div>
        <div>
          <label htmlFor="pwd">Password: </label>
          <input id="pwd" type="password"/>
        </div>
        <input type="button" value="OK!" />
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
