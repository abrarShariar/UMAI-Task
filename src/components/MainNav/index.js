import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

class MainNav extends Component {
    render() {
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
              <NavItem eventKey={1}>
                {'Simple Interest'}
              </NavItem>
              <NavItem eventKey={2}>
                {'Compound Interest'}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
}

export default MainNav;

