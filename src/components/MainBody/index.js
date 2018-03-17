import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import InterestCalculator from '../InterestCalculator';

class MainBody extends Component {
  render() {
    if(!this.props.activeOption) {
      return (
        <h1 style={{textAlign: 'center'}}>
        <br/>
        Simple & Compond Interest Calculator
        <br/>
        <br/>
        Explore & Have Fun!
        </h1>
      );
    }
    else {
      return (
        <InterestCalculator title={this.props.activeOption.name} />
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
