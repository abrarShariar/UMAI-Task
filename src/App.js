import React, { Component } from 'react';
import MainNav from './components/MainNav/';
import MainBody from './components/MainBody/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav></MainNav>
        <MainBody></MainBody>
      </div>
    );
  }
}

export default App;
