import React, { Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {

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
            <div className="container-fluid">
                <nav className="nav nav-pills nav-fill">
                                <li className="nav-item nav-link">
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle tag="span" onClick={this.toggle} data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>
                                            <button className="btn"> Dropdown button </button>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem > dropdown item 1</DropdownItem>
                                            <DropdownItem > dropdown item 2</DropdownItem>
                                            <DropdownItem > dropdown item 3</DropdownItem>
                                            <DropdownItem > dropdown item 4</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </li>
                                <li className="nav-item home-btn">    
                                    <a className="nav-link" href="home">
                                        <button className="btn">Home</button>
                                    </a>
                                </li>
                                <li className="nav-item">    
                                    <a className="nav-link" href="form">
                                        <button className="btn">Form</button>
                                    </a>
                                </li>

                                
                </nav>
                <h1>-header component-</h1>
            </div>
        );
      }
    }
       export default Header