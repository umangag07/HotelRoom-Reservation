import React from 'react'
import styled from 'styled-components';

const TitleContainer = styled.div`
padding:10px;
  font-size: 45px;
  display: flex;
  flex-direction: column;
  color: #051c32;
  align-items: ${props => props.align ? props.align : 'center'};
  text-align: ${props => props.align ? props.align : 'center'};
  @media(max-width:810px){
    font-size: 35px;
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
    const {line,align,lineWidth} = props
    return (
        <>
          <TitleContainer align={align} >
            {line}
            <Line lineWidth={lineWidth} />  
          </TitleContainer>
          
        </>
    )
}

export default Title
