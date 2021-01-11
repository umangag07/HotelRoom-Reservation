import React from "react";
import styled from "styled-components";

const BannerComponent = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 25vh;
  background-color: ${(props) => props.color ? props.color : "rgb(75, 44, 67,0.7)"};
  border-radius: 5px;
`;

const Line = styled.span`
  height: 2px;
  width: 80%;
  background-color: #d89216;
`;
const H1 = styled.h1`
  color: white;
  font-size: 35px;

  @media (max-width: 800px) {
  }
`;
const H2 = styled.h4`
  color: white;
`;
function Banner({ title, subtitle, color, children }) {
  return (
    <>
      <BannerComponent bgcolor={color}>
        <H1>{title}</H1>
        <Line />
        <H2>{subtitle}</H2>
        {children}
      </BannerComponent>
    </>
  );
}

export default Banner;
