import React, { Component } from "react";
import Defaultbcg from "../Assets/images/rooms/room9.jpg";
import BackgroundImgprop from "../Components/BackgroundImg";
import Banner from "../Components/Banner";
import { RoomContext } from "../Context";
import { NavLink } from "../Components/Button";
import styled from "styled-components";
import Title from "../Components/Title";
import "../index.css";
import Marginer from "../Components/Marginer";

const SingleRoomView = styled.div`
  width: 100%;
  min-height: 140vh;
  /* border:2px solid red; */
  display: flex;
  flex-direction: column;
`;
const ImageSection = styled.div`
  width: 100%;
  min-height: 50vh;
  align-items: center;
  /* border:2px solid black; */
  display: flex;
  padding: 2% 10% 0 10%;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 1150px) {
    padding: 2% 9% 0 9%;
  }
  @media (max-width: 810px) {
    min-height: 80vh;
    padding: 2% 5% 0 5%;
  }
  @media (max-width: 450px) {
    min-height: 180vh;
    padding: 2% 0% 0 0%;
  }
`;

const Image = styled.div`
  height: 20vh;
  width: 18vw;
  margin-left: 1em;
  background-color: #a5a5a5;
  box-shadow: 5px 10px 18px #888888;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  border-radius: 17px 4px 17px 4px;
  /* border:4px solid #a5a5a5; */
  @media (max-width: 1150px) {
    height: 20vh;
    width: 21vw;
  }
  @media (max-width: 810px) {
    height: 20vh;
    width: 40vw;
  }
  @media (max-width: 450px) {
    height: 25vh;
    width: 70vw;
  }
`;

const AboutRoomSection = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  padding: 0 8vw 0 8vw;
  /* border: 5px solid cyan; */
  flex-wrap: wrap;
  justify-content: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 40vw;
  /* border: 2px solid red; */
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 10px;
  letter-spacing: 2px;
  color: #1c2124;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 40vw;
  /* border: 2px solid red; */
  letter-spacing: 3px;
  padding: 10px;
  padding-left: 5vw;
  color: #1c2124;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const Extras = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 100vw;
  /* border: 2px solid red; */
  letter-spacing: 3px;
  align-items: left;
  color: #1c2124;
  padding-left: 20vh;
  padding-right: 20vh;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const ExtraList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  li {
    margin: 1em;
    font-size: 20px;
  }
`;
export class Single_room extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.roomType);
    this.state = {
      id: this.props.match.params.roomType,
      Defaultbcg,
    };
  }
  static contextType = RoomContext;
  // componentDidMount(){}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.id);
    console.log(room);
    // const SingleRoom = room ? <About/>:<Error/>
    if (!room) {
      return <div>Page not found</div>;
    }
    const {
      breakfast,
      capacity,
      description,
      name,
      price,
      type,
      images,
      extras,
    } = room;

    return (
      <>
        <BackgroundImgprop height="75vh" imgSrc={images[0]}>
          <Banner title={name} subtitle="" color="rgb(5, 11, 12,0.5)">
            <NavLink to="/rooms">Go Back To Rooms</NavLink>
          </Banner>
        </BackgroundImgprop>
        <SingleRoomView>
          <Title line="All Images" align="center" />
          <ImageSection>
            {images.map((image, index) => {
              return <Image image={image} key={index} />;
            })}
          </ImageSection>
          <Marginer direction="vertical" margin="2.5em" />
          <AboutRoomSection>
            <Description>
              <Title line="Description" align="left" />
              <Marginer direction="vertical" margin="2.5em" />
              <h5>{description}</h5>
            </Description>
            <Info>
              <Title line="Info" align="center" />
              <Marginer direction="vertical" margin="2.5em" />
              <h4>Price: Rs {price}</h4>
              <h4>Capacity: {capacity}</h4>
              <h4>Breakfast: {breakfast ? "Included" : "Not-Included"}</h4>
              <h4>Type: {type}</h4>
            </Info>
          </AboutRoomSection>
          <Extras>
            <Title line="Extras" align="left" lineWidth="15" />
            <ExtraList>
              {" "}
              {extras.map((service, index) => {
                return <li>{service}</li>;
              })}
            </ExtraList>
          </Extras>
        </SingleRoomView>
      </>
    );
  }
}

export default Single_room;
