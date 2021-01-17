import React, { Component } from 'react'
import Defaultbcg from '../Assets/images/rooms/room9.jpg'
import BackgroundImgprop from '../Components/BackgroundImg'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import styled from 'styled-components'
import { NavLink } from '../Components/Button'

export class Single_room extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.match.params.roomType)
        this.state = {
             id:this.props.match.params.roomType,
             Defaultbcg
        }
    }
   static contextType = RoomContext
    // componentDidMount(){}
     
    
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.id);
         console.log(room)
        // const SingleRoom = room ? <About/>:<Error/>
        if(!room){
            return(<div>Page noy found</div>)
            
        }
        const {breakfast, capacity, description, featured, name, price ,type, images, extras} = room
        
        return (
            <>
               <BackgroundImgprop height="75vh" imgSrc={images[0]} >
        <Banner title ={name} subtitle='' color="rgb(5, 11, 12,0.5)">
                  <NavLink to='/rooms'>Go Back To Rooms</NavLink>  
              </Banner>
          </BackgroundImgprop>
            </>
        )
    }
}

export default Single_room
