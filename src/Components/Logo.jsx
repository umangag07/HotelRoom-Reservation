import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../Assets/Logo/siteLogo.png'
import '../index.css'
import {BrowserRouter as Router} from 'react-router-dom'


const Logoconatiner = styled.div`
     display:flex;
     align-items:center;
`;
const LogoImage = styled.div`
margin:0;
     width:${({width})=> width? width:"14em"};
     height:${({height})=> height? height:"7em"};
     img{
         width:100%;
         height:100%;
     }
     @media (max-width: 1124px) {
        width:${({width})=> width? width:"10em"};
     height:${({height})=> height? height:"5em"};
  }
     
`;

function Logo(props) {
    const {width,height,fontSize} = props
    return (
        
        <>
        <Logoconatiner fontSize={fontSize}>
            <a href="/"><LogoImage width={width} height={height}><img src={LogoIcon} alt="Logo"/></LogoImage></a>
            <Router>
           </Router>
        </Logoconatiner>
            
        </>
    )
}

export default Logo
