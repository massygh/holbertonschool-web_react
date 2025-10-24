import React from 'react';
import logo from './assets/holberton-logo.jpg';
import './App.css';
import Notifications from './Notifications';
import { getCurrentYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      {/* Notifications */}
      <div className="root-notifications">
        <Notifications />
      </div>

      {/* Main App */}
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="holberton logo" />
          <h1>School dashboard</h1>
        </div>

        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>

        <div className="App-footer">
          <p>
            Copyright {getCurrentYear()} - {getFooterCopy(true)}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
