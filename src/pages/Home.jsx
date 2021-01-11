import React from 'react'
import BackgroundImgprop from '../Components/BackgroundImg'
import landingPagePhoto from '../../src/Assets/images/landingpage.jpg' 
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

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
`


function Home() {
    return (
        <>
          <BackgroundImgprop height="89vh" imgSrc={landingPagePhoto} >
          <Banner title="Luxirious rooms available" subtitle="at just Rs 5000">
                  <NavLink to='/rooms'>Book Now</NavLink>  
              </Banner>
          </BackgroundImgprop>
          
        </>
    )
}

export default Home
