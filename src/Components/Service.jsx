import React from "react";
import styled from "styled-components";
import { FaShuttleVan, FaBeer, FaHiking } from "react-icons/fa";
import {IoFastFoodOutline } from "react-icons/io5";
import Marginer from "./Marginer";
import Title from "./Title";


const ServiceContainer = styled.div`
  margin-top: 3em;
  width: 100%;
  min-height: 50vh;
  background-color: #a5a5a5;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media(max-width:820px){
    flex-direction:column;
  }
 
  
`;

const ServiceElement = styled.div`
  display: flex;
  flex-direction: column;

  width: 20%;
  height: 80%;
  align-items: center;
  text-align: center;
  /* background-color:red; */
  h2 {
    color: #000;
    font-weight: 400;
  }
  @media(max-width:820px){
    width:70%;
    font-size:20px;
  }
  @media(max-width:1000px){
    font-size:15px;
  }
 
  
`;
function Service() {
  const Services = [
    {
      icon: FaShuttleVan,
      title: "Free Shuttle",
      desc: `We provide you with free shuttle service on checkout to nearest Airport, Railway Station,
                    Bus Station at no extra charge. Everything is included with the bookings.`,
    },
    {
      icon: FaBeer,
      title: "Complimentary Beer ",
      desc: `We provide you with 1 free beer during your stay, exclusively imported from milan.
             we provide you with the best experience by giving us a small treat from our side.`,
    },
    {
      icon: FaHiking,
      title: "Hiking Suggestion ",
      desc: `Our Resort is at a very beautiful location, many hikings places are there nearby.
            we give hiking resources at very minimal cost. Make your stay exciting with us.`,
    },
    {
      icon: IoFastFoodOutline,
      title: "1 complimentary Breakfast",
      desc: `We give complimentary breakfast to all kind of bookings. Even more when you book our exotic bookings 
             plans, in which throughout your stay breakfast will be free.`,
    },
  ];
  return (
    <>
      <Title line="Services"/>
      <ServiceContainer>
        {Services.map((item, index) => {
          return (
            <>
              <ServiceElement >
                <Marginer direction="vertical" margin="1.5em" />
                <item.icon color="#a56b06" fontSize="30px" />
                <Marginer direction="vertical" margin="1.5em" />
                <h2>{item.title}</h2>
                <Marginer direction="vertical" margin="1.5em" />
                <p>{item.desc}</p>
              </ServiceElement>
            </>
          );
        })}
      </ServiceContainer>
    </>
  );
}

export default Service;
