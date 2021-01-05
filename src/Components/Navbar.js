import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Button } from "react-bootstrap";
const NavbarConatiner = styled.span`
  display: flex;
  width: 100%;
  height: 14.5vh;
  justify-content: space-between;
  padding-left: 2px;
  background: #f6ead4;
  @media (max-width: 1124px) {
    height:11vh;
  }

`;
const Logoconatiner = styled.span`
  display: flex;
  align-items: center;
`;

const AccessibilityConatiner = styled.div`
  display: flex;
  width: 15%;
  align-items: center;
  justify-content: space-evenly;
  /* background-color:black; */
  @media (max-width: 1124px) {
    width:25%;
  }
  @media (max-width: 806px) {
    display:none;
  }
`;
const NavLink = styled.div`
  height: 14.5vh;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color:white; */
  @media (max-width: 1124px) {
    width:46%;
  }
  @media (max-width: 806px) {
    position: absolute;
    right: 0px;
    height: 100vh;
    top: 10vh;
    background-color:#f6ead4 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.6s ease-in;
  }
`;
const Navtext = styled.h3`
  font-size: 23px;
  color: #044004;
  text-decoration: none;
`;
const Links = styled.a`
    :hover{
      text-decoration:none;
    }
    
`;


function Navbar() {
  return (
    <>
      <NavbarConatiner>
          <Logoconatiner>
            <Logo />
          </Logoconatiner>
          <NavLink>
            <Links  href="/">
              <Navtext>Home</Navtext>
            </Links>
            <Links href="/rooms">
              <Navtext>Rooms</Navtext>
            </Links>
            <Links  href ="/about_us">
              <Navtext>AboutUs</Navtext>
            </Links>
            <Links href ="/contact_us">
              <Navtext>ContactUs</Navtext>
            </Links>
          </NavLink>
          <AccessibilityConatiner>
            <a href="/customer/access">
              <Button variant="dark">Login</Button>
            </a>

            <a href="/customer/access">
              <Button variant="dark">Register</Button>
            </a>
          </AccessibilityConatiner>

      </NavbarConatiner>
    </>
  );
}

export default Navbar;
