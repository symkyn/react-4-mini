import React, { Component } from 'react';
import './App.css';

import Routes from './Routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/'><p>Link 1</p></Link>
        <Link to='/2'><p>Link 2</p></Link>
        <Link to= '/3'><p>Link 3</p></Link>
        <Routes />
      </div>
    );
  }
}

export default App;
