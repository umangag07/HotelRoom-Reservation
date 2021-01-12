import React from 'react'
import styled from 'styled-components';

const TitleContainer = styled.div`
  font-size: 45px;
  display: flex;
  flex-direction: column;
  color: #051c32;
  align-items: center;
  text-align: center;
  @media(max-width:810px){
    font-size: 35px;
  }
`;
const Line = styled.span`
  height: 4px;
  width: 30%;
  background-color: #d89216;
  @media(max-width:810px){
    width:60%
  }
`;
function Title(props) {
    const {line} = props
    return (
        <>
          <TitleContainer>
            {line}
            <Line/>  
          </TitleContainer>
          
        </>
    )
}

export default Title
