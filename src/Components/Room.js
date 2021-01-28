import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const RoomContainer = styled.div`
  height: 30vh;
  width: 22vw;
  margin-bottom:10vh;
  background-color: #a5a5a5;
  box-shadow: 5px 10px 18px #888888;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  @media (max-width: 1200px) {
    height: 20vh;
    width: 45vw;
  }
  @media (max-width: 810px) {
    height: 20vh;
    width: 45vw;
  }
  @media (max-width: 450px) {
    height: 19vh;
    width: 80vw;
  }
 :hover{
      text-decoration:none;
    
 }
  span {
    padding: 8px;
    color: white;
    background-color: black;
    letter-spacing: 2px;
    font-size: 14px;
    border-radius: 15px 50px;
  }

  h3 {
    position: relative;
    left: 0px;
    top: 25vh;
    color: #051c32;
    background-color: #a5a5a5;
    @media (max-width: 1200px) {
    top:16vh;
  }
    @media (max-width: 810px) {
      top: 16vh;
    }
    @media (max-width: 450px) {
      top: 15vh;
    }
  }

`;
export default function Room({ room }) {
  // console.log(room.id);
  const { name, images, price, id } = room;
  return (
    <>
    <Link to={`rooms/${id}`} style={{ textDecoration: 'none' }}>
      <RoomContainer image={images[0]}>
        <span>Rs{price} / Night</span>
     
        <h3>{name}</h3>
      </RoomContainer>
      </Link>
    </>
  );
}
