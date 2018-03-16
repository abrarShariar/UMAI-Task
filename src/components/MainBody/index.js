import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MainBody extends Component {
  createListItems(){
    return this.props.users.map((user) => {
      return (<li key={user.id}>{user.first}</li>)
    });
  }
  
  render() {
    return (
      <div>
        <h2>Username List</h2>
          <ul>
            {this.createListItems()}
          </ul>
        <h2>user Details</h2>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(MainBody);
