import React from 'react'
import BackgroundImg from '../Components/BackgroundImg'
import errorPagePhoto from '../../src/Assets/images/pool.jpg' 
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Banner from '../Components/Banner'
import '../index.css'

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
function Error() {
    return (
        <div>
            <BackgroundImg height="89vh" imgSrc={errorPagePhoto}>
            <Banner title=" 4  0  4" subtitle="Page Not Found" color="rgb(5, 11, 12,0.5)">
                  <NavLink to='/'>Go Home</NavLink>  
              </Banner>
            </BackgroundImg>
        </div>
    )
}

export default Error
