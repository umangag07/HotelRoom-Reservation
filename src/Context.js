import React, { Component } from 'react'
import {Data} from './data'
const RoomContext = React.createContext();

 class RoomProvider extends Component {
     state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:false,
        type:'all',
        breakfast:false,
        min_price:0,
        max_price:0,
        price:0,
        capacity:1
     };

 //getData 
 componentDidMount(){
     let rooms = this.formatData(Data)
    //  console.log(rooms)
    let featuredRooms = rooms.filter( room => room.featured === true);
    // console.log(featuredRooms)
    let max_price =  Math.max(...rooms.map(item=>item.price))
    this.setState({
        rooms,
        featuredRooms,
        sortedRooms:rooms,
        loading:false,
        price:max_price,
        max_price
        
        
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
 
  getRoom = (id)=>{
      let tempRooms = [...this.state.rooms];
      const room = tempRooms.find((room)=> room.id === id);
      return room;
  }
  handleChange = (event)=>{
    //   this.state.type = event.target.value;
    const target = event.target
    const name = event.target.name
    const value = event.type === "checkBox" ? target.checked :target.value ;
    // console.log(name,value);
    this.setState({
        [name] : value
    },this.filterRooms)


  }
  filterRooms = ()=>{
      console.log("hello")
  }

    render() {
        return (
            <>
              <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                 {this.props.children}    
              </RoomContext.Provider>  
            </>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomContext, RoomProvider, RoomConsumer};

