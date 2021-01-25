import React, { useContext } from "react";
import BackgroundImg from "../Components/BackgroundImg";
import room from "../../src/Assets/images/rooms/room.jpg";
import styled from "styled-components";
import Banner from "../Components/Banner";
import Title from "../Components/Title";
import Marginer from "../Components/Marginer";
import { RoomContext } from "../Context";
import Room from "../Components/Room";
import {NavLink} from '../Components/Button'

const RoomConatainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 120vh;
  /* border:2px solid red; */
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1200px) {
    min-height: 170vh;
    align-items: center;
  }
  @media (max-width: 810px) {
    min-height: 170vh;
    align-items: center;
  }
  @media (max-width: 470px) {
    min-height: 180vh;
    align-items: center;
  }
  @media (max-width: 450px) {
    min-height: 290vh;
    align-items: center;
  }
`;

const FilterComponent = styled.div`
       display:flex;
       width:100vw;
       height:15vh;
       border:2px solid red;
       align-items:center;

`;

function Rooms() {
  const Allrooms = useContext(RoomContext);
  const Rooms = Allrooms.rooms;
  // console.log(Rooms)
  return (
    <>
      <BackgroundImg height="70vh" imgSrc={room}>
        <Banner title=" OUR ROOMS " subtitle="" color="rgb(5, 11, 12,0.5)">
          <NavLink to="/">Go Home </NavLink>
        </Banner>
      </BackgroundImg>
      <Title line="Search Your Room" />
      <FilterComponent> </FilterComponent>
      <Marginer direction="vertical" margin="2.5em" />
      <RoomConatainer>
        {Rooms.map((room, index) => {
          return (
            <>
              <Room key={index} room={room} />
              {/* <Marginer direction="horizontal" margin="1em" /> */}
            </>
          );
        })}
      </RoomConatainer>
    </>
  );
}

export default Rooms;
