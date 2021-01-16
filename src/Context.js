import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext();

 class RoomProvider extends Component {
     state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
     };

 //getData 
 componentDidMount(){
     let rooms = this.formatData(items)
    //  console.log(rooms)
    let featuredRooms = rooms.filter( room => room.featured === true);
    // console.log(featuredRooms)
    this.setState({
        rooms,featuredRooms, sortedRooms:rooms,loading:false
    });
     
 }
  formatData(items){
      let tempItems = items.map(item =>{
          let id = item.roomId.id
          let images = item.roomFields.images.map(image =>
              image.url 
          )
          let room = {...item.roomFields, images , id}
          return room
      })
      return tempItems

  }
 

    render() {
        return (
            <>
              <RoomContext.Provider value={{...this.state}}>
                 {this.props.children}    
              </RoomContext.Provider>  
            </>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomContext, RoomProvider, RoomConsumer};

