import React, { Component } from 'react'
import {RoomContext} from '../Context'
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
import Marginer from "./Marginer";
import styled from 'styled-components';

const FeaturedRoomContainer = styled.div`
      display:flex;
      flex-direction:column;
      align-items:center;
      min-height: 50vh;
      width:100%;
     /* border:1px solid black; */

`
const FeaturedRoom = styled.div`
      display:flex;
      justify-content:space-around;
      align-items:center;
      min-height:50vh;
      width:100%;
         /* background-color:red; */
    @media(max-width:810px){
        flex-direction:column;
        margin-top:2em;
        justify-content:space-between;
        min-height:100vh;
    }
    @media(max-width:450px){
        
        min-height:120vh;
    }
    

`
export class FeaturedComponents extends Component {
    static contextType = RoomContext
    render() {
        let {featuredRooms: rooms, loading} = this.context  // renaming featured rooms
        rooms = <FeaturedRoom> {rooms.map(room=>{
           return <Room key={room.id} room={room}/> 
          
       })}</FeaturedRoom> 
        return (
            <>
               
                <FeaturedRoomContainer>
                <Title line="Featured Rooms"/>
                {/* <Marginer direction="vertical" margin="3.5em" /> */}
                {loading?<Loading/>:rooms}
                    
                </FeaturedRoomContainer>
                
                
            </>
        )
    }
}

export default FeaturedComponents
