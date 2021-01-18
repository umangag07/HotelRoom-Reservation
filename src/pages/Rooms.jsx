import React, { useContext } from "react";
import BackgroundImg from "../Components/BackgroundImg";
import room from "../../src/Assets/images/rooms/room.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "../Components/Banner";
import Title from "../Components/Title";
import Marginer from "../Components/Marginer";
import { RoomContext } from "../Context";
import Room from "../Components/Room";
const NavLink = styled(Link)`
  background-color: #d89216;
  color: black;
  border-radius: 5px;
  padding: 0.5em;
  letter-spacing: 2px;
  :hover {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 450px) {
    letter-spacing: 0;
    padding: 0.3em;
    font-size: 14px;
  }
`;

const RoomConatainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 120vh;
  /* border:2px solid red; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    min-height: 150vh;
  }
  @media (max-width: 810px) {
    min-height: 150vh;
  }
  @media (max-width: 450px) {
    min-height: 240vh;
    align-items: center;
  }
`;

function Rooms() {
  const Allrooms = useContext(RoomContext);
  const Rooms = Allrooms.rooms;
  // console.log(Rooms)
  return (
    <>
      <BackgroundImg height="70vh" imgSrc={room}>
        <Banner title=" OUR ROOMS " subtitle="" color="rgb(5, 11, 12,0.5)">
          <NavLink to="/">Go Home</NavLink>
        </Banner>
      </BackgroundImg>
      <Title line="All Rooms" />
      <Marginer direction="vertical" margin="2.5em" />
      <RoomConatainer>
        {Rooms.map((room, index) => {
          return (
            <>
              <Room key={index} room={room} />
              <Marginer direction="horizontal" margin="1.5em" />
            </>
          );
        })}
      </RoomConatainer>
    </>
  );
}

export default Rooms;
