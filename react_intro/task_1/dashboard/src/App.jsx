import React from 'react';
import './App.css';
import './Notifications.css';
import logo from './assets/holberton-logo.jpg';
import Notifications from './Notifications.jsx';
import { getCurrentYear, getFooterCopy } from './utils.js';

export default function App() {
  return (
    <div className="App">
      <div className="root-notifications">
        <Notifications />
      </div>

      <div className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        {/* SANS tiret comme sur la maquette de la task 1 */}
        <p>Copyright {getCurrentYear()} {getFooterCopy(false)}</p>
      </div>
    </div>
  );
}