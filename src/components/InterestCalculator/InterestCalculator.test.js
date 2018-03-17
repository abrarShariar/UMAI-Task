import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import InterestCalculator from './index';

import {Provider} from 'react-redux';

configure({ adapter: new Adapter() });

describe('<InterestCalculator/>', () => {
  
  const initialState = {
    principal: '',
    rateOfInterest: '',
    time: '',
    frequency: 365,
    principalValid: null,
    rateOfInterestValid: null,
    timeValid: null,
    errorMsgList: [{
      key: 'principal',
      value: 'Please Enter A Valid Principal In $'
    },
    {
      key: 'rateOfInterest',
      value: 'Please Enter A Valid Rate Of Interest In %'
    },
    {
      key: 'time',
      value: 'Please Enter A Valid Time In Year'
    }],
    showErrorMsg: false,
    showResult: false,
    interest: 0,
    total: 0
  };
  
  it('check form present', () => {
    const wrapper = mount(<InterestCalculator/>);
    expect(wrapper.find('Form').length).toEqual(1);
  });
  
  it('check initial state', () => {
    const wrapper = shallow(<InterestCalculator/>);
    expect(wrapper.state()).toEqual(initialState);
  });
  
  //test simple interest
  it('calculate simple interest', () => {
    const wrapper = shallow(<InterestCalculator title="simple"/>);
    wrapper.setState({
      principal: 1000,
      rateOfInterest: 10,
      time: 5,
      principalValid: 'success',
      rateOfInterestValid: 'success',
      timeValid: 'success',
      showErrorMsg: false,
      showResult: true
    });
    
    wrapper.instance().validationCheck();
    
    expect(wrapper.state().interest).toEqual(500);
    expect(wrapper.state().total).toEqual(1500);
  });
  
  
  //test compound interest
  it('calculate compound interest', () => {
    const wrapper = shallow(<InterestCalculator title="compound"/>);
    wrapper.setState({
      principal: 2000,
      rateOfInterest: 5,
      time: 5,
      frequency: 2,
      principalValid: 'success',
      rateOfInterestValid: 'success',
      timeValid: 'success',
      showErrorMsg: false,
      showResult: true
    });
    
    wrapper.instance().validationCheck();
    
    expect(wrapper.state().interest.toFixed(2)).toEqual('560.17');
    expect(wrapper.state().total.toFixed(2)).toEqual('2560.17');
  });  

});

