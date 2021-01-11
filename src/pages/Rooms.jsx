import React from 'react'
import BackgroundImg from '../Components/BackgroundImg'
import room from '../../src/Assets/images/rooms/room1.jpg' 
function Rooms() {
    return (
        <>
          <BackgroundImg height="70vh" imgSrc={room}></BackgroundImg> 
        </>
    )
}

export default Rooms
