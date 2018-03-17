import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import MainBody from './index';
import allReducers from '../../reducers';
import {createStore} from 'redux';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('<MainBody/>', () => {
  const initialState = {
    activeOption: {
      id: 1,
      name: 'simple'
    }
  }
  const mockStore = configureStore();
  let store, container;
  
  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<MainBody store={store}/>);
  });
  
  it('render MainBody smart component', () => {
    expect(container.length).toEqual(1);
  });
  
  it('check interest calculators renders', () => {
    expect(container.prop('activeOption')).toEqual(initialState.activeOption);
  });
  


});



