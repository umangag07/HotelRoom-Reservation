import React, { Component } from "react";
import Defaultbcg from "../Assets/images/rooms/room9.jpg";
import BackgroundImgprop from "../Components/BackgroundImg";
import Banner from "../Components/Banner";
import { RoomContext } from "../Context";
import { NavLink } from "../Components/Button";
import styled from "styled-components";
import Title from "../Components/Title";

const SingleRoomView = styled.div`
     width:100%;
     min-height:120vh;
     /* border:2px solid red; */
     display:flex;
     flex-direction:column;
`;
const ImageSection = styled.div`
     width:100%;
     min-height:50vh;
     align-items:center;
     /* border:2px solid black; */
     display:flex;
     padding:2% 10% 0 10%;
     justify-content:center;
     flex-wrap: wrap;
     @media (max-width: 1150px) {
        padding:2% 9% 0 9%;
  }
  @media (max-width: 810px) {
      min-height:80vh;
    padding:2% 5% 0 5%;
  }
  @media (max-width: 450px) {
    min-height:180vh;
    padding:2% 0% 0 0%;
  }
     
`;

const Image = styled.div`
  height: 20vh;
  width: 18vw;
  margin-left:1em;
  background-color: #a5a5a5;
  box-shadow: 5px 10px 18px #888888;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  border-radius:17px 4px 17px 4px ;
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
      return <div>Page noy found</div>;
    }
    const {
      breakfast,
      capacity,
      description,
      featured,
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
            <Title line="All Images" align="center"/>
             <ImageSection>
                 <Image image={images[0]}/>
                 <Image image={images[1]}/>
                 <Image image={images[2]}/>
                 <Image image={images[0]}/>
                 <Image image={images[1]}/>
                 <Image image={images[2]}/>
                 
                 
                  </ImageSection>
        </SingleRoomView>
      </>
    );
  }
}

export default Single_room;
