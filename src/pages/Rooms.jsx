import React from 'react'
import BackgroundImg from '../Components/BackgroundImg'
import room from '../../src/Assets/images/rooms/room1.jpg' 
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../Components/Banner'


const NavLink = styled(Link)`
    background-color:#d89216;
    color:black;
    border-radius:5px;
    padding:0.5em;
    letter-spacing:2px;
     :hover{
         text-decoration:none;
         color:white;
     }
     @media(max-width:450px){
      letter-spacing:0;
      padding:0.3em;
      font-size:14px;
      
  }
`
function Rooms() {
    return (
        <>
          <BackgroundImg height="70vh" imgSrc={room}>
          <Banner title=" OUR ROOMS " subtitle="" color="rgb(5, 11, 12,0.5)">
                  <NavLink to='/'>Go Home</NavLink>  
              </Banner>
            </BackgroundImg> 
        </>
    )
}

export default Rooms
