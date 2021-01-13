import React from 'react'
import BackgroundImgprop from '../Components/BackgroundImg'
import landingPagePhoto from '../../src/Assets/images/poolview.jpg' 
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Service from '../Components/Service'
import Marginer from '../Components/Marginer'
import FeaturedComponents from '../Components/FeaturedComponents'

const NavLink = styled(Link)`
    background-color:#d89216;
   
    border-radius:5px;
    padding:0.5em;
    color:#040c55;
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


function Home() {
    return (
        <>
          <BackgroundImgprop height="75vh" imgSrc={landingPagePhoto} >
        <Banner title="Luxirious rooms available" subtitle="at just Rs 5000" color="rgb(5, 11, 12,0.5)">
                  <NavLink to='/rooms'>Book Now</NavLink>  
              </Banner>
          </BackgroundImgprop>
          <Service/>
          <Marginer direction="vertical" margin="2em"/>
          <FeaturedComponents/>
          
        </>
    )
}

export default Home
