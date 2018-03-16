import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MainBody extends Component {
  
  render() {
    if(!this.props.activeOption){
      return (
        <h1>Hi! Select simple/compound interest option from the navbar</h1>
      );
    }
    return (
      <div> 
        {this.props.activeOption.name}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeOption: state.activeOption
  };
}

export default connect(mapStateToProps)(MainBody);
