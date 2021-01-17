import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const  NavLink = styled(Link)`
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
function Button() {
    return (
        <div>
            
        </div>
    )
}

export default Button
