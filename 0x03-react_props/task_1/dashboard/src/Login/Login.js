import React from 'react';
import './Login.css';

function App() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
