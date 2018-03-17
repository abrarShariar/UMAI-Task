import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import MainNav from './index';
import allReducers from '../../reducers';
import {createStore} from 'redux';

import {Provider} from 'react-redux';

const store = createStore(allReducers);
configure({ adapter: new Adapter() });

describe('<MainNav/>', () => {
  it('renders a navbar', () => {
    const wrapper = mount(
        <Provider store={store}>
          <MainNav/>
        </Provider>  
      );
    expect(wrapper.find('Navbar').length).toEqual(1);
  });
  
  it('show navitems', () => {
    const wrapper = mount(
        <Provider store={store}>
          <MainNav/>
        </Provider>  
      );
    expect(wrapper.find('NavItem').length).toEqual(2);
  });
});



