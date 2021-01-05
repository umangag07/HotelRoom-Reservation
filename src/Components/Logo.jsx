import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../Assets/Logo/logo_.png'
import '../index.css'
import {Link,BrowserRouter as Router} from 'react-router-dom'


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
const LogoText = styled.div`
     margin:0;
     font-size:${({fontSize})=> fontSize ? fontSize: "30px"};
     font-weight:700;
     color:${props=>props.color?props.color:"#f1f1f1"};
     font-family: 'Cabin', sans-serif;
     
`;

function Logo(props) {
    const {width,height,fontSize,color} = props
    return (
        
        <>
        <Logoconatiner fontSize={fontSize}>
            <LogoImage width={width} height={height}><img src={LogoIcon} alt="Logo"/></LogoImage>
            <Router>
           </Router>
        </Logoconatiner>
            
        </>
    )
}

export default Logo
