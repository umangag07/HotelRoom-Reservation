import React, { Component } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarContainer = styled.div`
  display: flex;
  height: 12vh;
  width: 100%;
  background-color: beige;
`;

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        <NavbarContainer>hello navbar</NavbarContainer>
      </div>
    );
  }
}

export default Navbar;
