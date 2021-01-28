import React, { useContext } from "react";
import BackgroundImg from "../Components/BackgroundImg";
import room from "../../src/Assets/images/rooms/room.jpg";
import styled from "styled-components";
import Banner from "../Components/Banner";
import Title from "../Components/Title";
import Marginer from "../Components/Marginer";
import { RoomContext } from "../Context";
import Room from "../Components/Room";
import { NavLink } from "../Components/Button";
import FilterRooms from "../Components/FilterRooms";

const RoomConatainer = styled.div`
  display: flex;
  width: 100%;
  padding-left:3.7vw;
  /* min-height: 30vh; */
  /* max-height: 120vh; */
  /* border:2px solid red; */
  flex-wrap: wrap;
  justify-content: flex-start;
   align-items: center; 

  @media (max-width: 1200px) {
    min-height: 60vh;
    max-height: 170vh;
    padding-left:3.7vw; 
    align-items:flex-start;
     justify-content:flex-start;
    /* align-items: center; */
  }
  @media (max-width: 810px) {
     min-height: 50vh; 
    max-height: 200vh;
    /* align-items: center; */
     align-items:flex-start;
     justify-content:space-between;
     padding-left:3vw; 

  }
  @media (max-width: 470px) {
    min-height: 40vh;
    max-height: 180vh;
    padding-left:2vw;
    align-items:flex-start;
    /* align-items: center; */
  }
  @media (max-width: 450px) {
    /* min-height: 90vh; */
     max-height: 390vh;
     padding-left:9vw;
    /* padding-left:2.5em; */
    /* align-items: center; */
  }
 
`;

const RoomNotFound = styled.div`
    display:flex;
     font-size:40px;
     font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     text-align:center;
     letter-spacing:2.3px;
     text-align:center;
     justify-content:center;

`

function Rooms() {
  const Allrooms = useContext(RoomContext);
  const Rooms = Allrooms.sortedRooms;
   console.log("hola rooms",Rooms.length);
  return (
    <>
      <BackgroundImg height="70vh" imgSrc={room}>
        <Banner title=" OUR ROOMS " subtitle="" color="rgb(5, 11, 12,0.5)">
          <NavLink to="/">Go Home </NavLink>
        </Banner>
      </BackgroundImg>
      <Title line="Search Your Room" />
      <FilterRooms />
      <Marginer direction="vertical" margin="2.5em" />
      <RoomConatainer>
        {Rooms.length?Rooms.map((room, index) => {
          return (
            <>
             
              <Room key={index} room={room} />
              <Marginer direction="horizontal" margin="1em" />
            </>
          );
        }):<RoomNotFound><h1>No matching rooms found</h1></RoomNotFound>}
      </RoomConatainer>
    </>
  );
}

export default Rooms;
