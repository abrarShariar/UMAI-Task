import React, { Component } from 'react';
import {connect} from 'react-redux';
import InterestCalculator from '../InterestCalculator';

class MainBody extends Component {
  render() {
    if(!this.props.activeOption) {
      return (
        <div className="headingBox">
          <h1 style={{textAlign: 'center'}}>
          <br/>
          Simple & Compond Interest Calculator
          <br/>
          <br/>
          Explore & Have Fun!
          </h1>
        </div>
      );
    }
    else {
      return (
        <div className="interestCalculator">
          <InterestCalculator title={this.props.activeOption.name} />
        </div>
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
