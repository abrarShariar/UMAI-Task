import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SimpleInterest from '../SimpleInterest/';

class MainBody extends Component {

  render() {
    if(!this.props.activeOption) {
      return (
        <h1>Hi! Select simple/compound interest option from the navbar</h1>
      );
    }
    else if(this.props.activeOption.name === 'simple-interest') {
      return (
        <SimpleInterest />
      );
    }
    else if(this.props.activeOption.name === 'compound-interest') {
      return (
        <h1>Compound Interest</h1>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    activeOption: state.activeOption
  };
}

export default connect(mapStateToProps)(MainBody);
