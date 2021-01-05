import React, { Component } from "react";
import styled from "styled-components";
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import Logo from "./Logo";
import Marginer from "./Marginer";


const NavbarContainer = styled.div`
  height: 15vh;
  width: 100%;
  background-color: beige;
`;


export class Navigationbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <>
        <NavbarContainer>
          <Navbar bg="" expand="lg">
            <Navbar.Brand href="/"><Logo color="#7fe7dc" fontSize="20px" width="13em" height="5em"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Marginer direcetion="vertical" margin="5em"/>
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/rooms">ROOMS</Nav.Link>
                <Nav.Link href="/about_us">ABOUT US</Nav.Link>
                <Nav.Link href="/contact_us">CONTACT US</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </NavbarContainer>
      </>
    );
  }
}

export default Navigationbar;
