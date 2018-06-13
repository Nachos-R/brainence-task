import React, { Component } from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import LoginPage from './components/LoginPage';
import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;
