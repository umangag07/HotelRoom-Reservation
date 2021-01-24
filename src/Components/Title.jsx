import React from 'react'
import styled from 'styled-components';

const TitleContainer = styled.div`
padding:10px;
  font-size:${props=>props.size1?props.size1:"45px"};
  display: flex;
  flex-direction: column;
  color: #051c32;
  align-items: ${props => props.align ? props.align : 'center'};
  text-align: ${props => props.align ? props.align : 'center'};
  @media(max-width:810px){
    font-size: ${props=>props.size2?props.size2:"35px"};
  }
  @media(max-width:450px){
    font-size: ${props=>props.size2?props.size2:"28px"};
  }
`;
const Line = styled.span`
  height: 4px;
  width:${props => props.lineWidth ? `${props.lineWidth}%` : '30%'};
  background-color: #d89216;
  @media(max-width:810px){
    width:60%;
  }
`;
function Title(props) {
    const {line,align,lineWidth,fs1,fs2} = props
    return (
        <>
          <TitleContainer align={align} size1={fs1} size2={fs2}>
            {line}
            <Line lineWidth={lineWidth} />  
          </TitleContainer>
          
        </>
    )
}

export default Title
