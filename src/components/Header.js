import React, { Component } from 'react';
import {  Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Single from './Single';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
          dropdownOpen: false,
          dropdownSelection: null,
          palettedata: ["placeholder palettedata"],
          selectedname:'no selection'
        };
        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this)
      }

      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      async componentDidMount() {
        const result = await fetch(
            'http://localhost:3001', { method: 'GET' }
            )
        const fetched_info = await result.json();
        this.setState({palettedata:fetched_info.palettes}
        )
    }

    async handleClick(name, ID, colfam1, colfam2, colfam3) {
        await alert("the ID for " +  name + " is " + ID + ". The color families in this palette include: " + 
        colfam1 + " " + colfam2 + " " + "and " + colfam3 + ".");
        await this.setState({dropdownSelection:ID})
      };

      render() {
        let { palettedata } = this.state;
        return (
            <div className="container-fluid">
                
                <nav className="nav nav-pills nav-fill">
                                <li className="nav-item nav-link top-margin">
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle tag="span" onClick={this.toggle} data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>
                                            <button className="btn circle"> Dropdown </button>
                                        </DropdownToggle>
                                      
                                            <DropdownMenu >

                                            {palettedata.map(palettedata => 
                                                <div onClick={() => {
                                                        const name = palettedata.name;
                                                        const ID = palettedata.id;
                                                        const colfam1 = palettedata.col1fam;
                                                        const colfam2 = palettedata.col2fam;
                                                        const colfam3 = palettedata.col3fam;
                                                        this.handleClick(name, ID, colfam1, colfam2, colfam3);
                                                        }}>   
                                                
                                                    <DropdownItem > 
                                                        <a  href= {`/single/${palettedata.id}`} > {palettedata.name} </a> 
                                                    </DropdownItem> 
                                                        
                                                </div>
                                            )}

                                            </DropdownMenu>
                                        
                                    </Dropdown>
                                   
                                </li    >
                                <li className="nav-item circle">    
                                    <a className="nav-link" href="home">
                                        <button className="btn">Home</button>
                                    </a>
                                </li>
                                <li className="nav-item circle">    
                                    <a className="nav-link" href="form">
                                        <button className="btn">Form</button>
                                    </a>
                                </li>         
                </nav>
               
            </div>
        );
      }
    }
       export default Header