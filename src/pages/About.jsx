import React from 'react'
import styled from 'styled-components'

const MainSec = styled.div`
   width:80%;
   height:70vh;
   border:4px solid #050542;
   align-items:center;
   background-color:#d4b85b;
   padding:10% 10% 10% 10%;
   margin:5% 2% 0 10%;
   border-radius:15px;
   color:#050542;
   font-size:20px;

   @media(max-width:1100px){
   height:75vh;
   
  }
   @media(max-width:850px){
   height:80vh;
   
  }
   @media(max-width:650px){
   height:90vh;
   
  }
   @media(max-width:550px){
   height:110vh;
   
  }
   @media(max-width:450px){
   height:120vh;
   
  }
   @media(max-width:390px){
   height:140vh;
   
  }
   
  
  
`
function About() {
    return (
        <>
           <MainSec>Band is a multidisciplinary creative studio based in the Pacific Northwest.

Their About Us page stands out by showcasing some of their unique and creative projects.

No number of words could hope Band is a multidisciplinary creative studio based in the Pacific Northwest.

Their About Us page stands out by showcasing some of their unique and creative projects.

No number of words could hopeto tell one of their potential clients nearly as much as these pictures can.

In this case, the 25 pictures featured on Band’s About Us page are worth much more than the 170 actual words you’ll read on the page.</MainSec>
        </>
    )
}

export default About
