import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectOption} from '../../actions/index';


class MainNav extends Component {
  
    render() {
      const optionList = this.props.options.map((option) => {
        return (
          <NavItem key={option.id} onClick={() => this.props.selectOption(option)}>
            {option.name}
          </NavItem>
          )
        });
      
      return (
        <div className="Navbar">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">{'UMAI'}</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {optionList}
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
};

function mapStateToProps(state) {
  return {
    options: state.options
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectOption: selectOption
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
