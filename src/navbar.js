import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="#" active>Home</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Eventos
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Chibi Anime Fest</DropdownItem>
              <DropdownItem>Halloween no Matsuri</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">Contacto</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Login/Signup</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}