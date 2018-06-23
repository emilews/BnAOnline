import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="special-color-dark" dark expand="lg" fixed="top" scrolling>
                    <NavbarBrand href="/">
                        <strong>Bakumatsu no Anime</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to=""><AnchorLink href="#Home">Home</AnchorLink></NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Eventos</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem><AnchorLink href="#events">Evento grande</AnchorLink></DropdownItem>
                                  <DropdownItem href="#">Halloween no Matsuri</DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                        <NavItem active>
                              <NavLink to="#">Contacto</NavLink>
                          </NavItem>
                        <NavItem>
                              <NavLink className="nav-link" to="#">Login</NavLink>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}
export default NavbarFeatures;