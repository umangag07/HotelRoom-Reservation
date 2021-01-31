import React,{useContext} from "react";
import styled from "styled-components";
import Logo from "./Logo";
import {RoomContext} from '../Context';
import {
  FaWhatsapp,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Marginer from "./Marginer";

const FooterSection = styled.div`
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  background-color: #c0c0b8;
  margin-top: 25vh;
  justify-content: space-between;
  @media(max-width:450px){
   height:70vh;

  }
`;
const ReservedSection = styled.div`
  height: 8vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: white;
  /* border:1px solid red; */
  h7 {
    font-size: 10px;
    color: #02053b;
  }
  span {
    height: 1px;
    width: 80%;
    background-color: #02053b;
  }
`;

const MainSec = styled.div`
  display: flex;
  height: 32vh;
  width: 100%;
  justify-content: space-between;
  flex-wrap:wrap;

  
`;
const LogoSec = styled.div`
  align-items: top;
  height:10vh;
  width:17vw;
  flex:2;
  /* border:1px solid red; */
  @media(max-width:450px){
    width:100%;

  }
  @media(max-width:830px){
    flex:5;
    width:100vw;
  }
`;
const Linksec = styled.div`
  width: 20vw;
  /* border:1px solid red; */
  padding-left: 15px;
  padding-top: 25px;
  align-items:center;
  justify-content:center; 
  ul {
    color: #02053b;
    list-style: none;
    font-size: 19px;
  }
  a {
    text-decoration: none;
    color: #02053b;
    :hover{
      color:#a39303;
    }
  }
  h5{
    color:black;
  }
  @media(max-width:450px){
    width:100%;

  }
`;
const SocialMedia = styled.div`
  width: 20vw;
  padding-top: 10px;
  align-items: center;
  /* border:1px solid red; */
  h7 {
    color: #02053b;
    font-size: 16px;
  }
`;
const Icons = styled.div`
  display: flex;
  flex:2;
  width:20vw;
  /* border: 1px solid red; */
  justify-content: space-evenly;
  a{
    color: #02053b;
    :hover{
      color: #a39303;
    }
  }
  @media(max-width:450px){
   width:100vw;

  }
  @media(max-width:450px){
   width:100vw;

  }
`;

function Footer() {
 const Context = useContext(RoomContext);
 const {featuredRooms} = Context;
 
  return (
    <>
      <FooterSection>
        <MainSec>
          <LogoSec>
            {" "}
            <Logo width="15vw" height="5.5em" />
          </LogoSec>
          <Linksec>
            <ul>
            <li>
                <h5>Sections</h5>
               </li>
               <Marginer margin="10px"/>
              <li>
                <a href="/rooms">Rooms</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/about_us">About Us</a>
              </li>
              <li>
                <a href="/contact_us">Contact Us</a>
              </li>
              <li>
                <a href="/">Jobs Open</a>
              </li>
            </ul>
          </Linksec>
          <Linksec>
            <ul>
              <li>
                <h5>Featured Rooms</h5>
               </li>
               <Marginer margin="10px"/>
                {featuredRooms.map(room=>{
                  return<li> <a href={`/rooms/${room.id}`}>{room.name}</a></li>
                })}
              
             
            </ul>
          </Linksec>
          <SocialMedia>
            <Icons>
             <a href="https://www.whatsapp.com"> <FaWhatsapp size="20px" /></a>
             <a href="https://www.facebook.com"><FaFacebookSquare size="20px" /></a>
             <a href="https://www.instagram.com"><FaInstagram size="20px" /></a>
             <a href="https://www.twitter.com"><FaTwitterSquare size="20px" /></a>
            </Icons>
          </SocialMedia>
        </MainSec>

        <ReservedSection>
          <span />
          <h7>All rights reserved JkGrandResort @2020</h7>
        </ReservedSection>
      </FooterSection>
    </>
  );
}

export default Footer;
