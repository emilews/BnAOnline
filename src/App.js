import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div class="topRight">
          <div class="fixedHeader"><Navbar/></div>
        </div>
      </div>
    );
  }
}

export default App;
