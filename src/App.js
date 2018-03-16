import React, { Component } from 'react';
import MainNav from './components/MainNav/';
import MainBody from './components/MainBody/';

//test
// import UserList from './containers/user-list';

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
