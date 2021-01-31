import React, { Component } from "react";
// import { Data } from "./data";
import Client from "./Contentful";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: false,
    type: "all",
    breakfast: false,
    min_price: 0,
    max_price: 0,
    price: 0,
    capacity: 1,
  };

  //getData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "jkGrandHotel",
      });
      // console.log(response);
      let rooms = this.formatData(response.items);
      //  console.log(rooms)
      let featuredRooms = rooms.filter((room) => room.featured === true);
      // console.log(featuredRooms)
      let max_price = Math.max(...rooms.map((item) => item.price));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: max_price,
        max_price,
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getData()
  }
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (id) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.id === id);
    return room;
  };
  handleChange = (event) => {
    //   this.state.type = event.target.value;
    const target = event.target;
    const name = event.target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    // console.log(name, value);
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let { rooms, type, capacity, price, breakfast, max_price } = this.state;
    // console.log(breakfast);
    let tempRooms = [...rooms];

    // transform values

    capacity = parseInt(capacity);

    //filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // console.log(tempRooms)

    //filter by capacity

    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // filter by price
    if (price !== max_price) {
      tempRooms = tempRooms.filter((room) => room.price <= price);
    }
    this.setState({
      sortedRooms: tempRooms,
    });
    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <>
        <RoomContext.Provider
          value={{
            ...this.state,
            getRoom: this.getRoom,
            handleChange: this.handleChange,
          }}
        >
          {this.props.children}
        </RoomContext.Provider>
      </>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };
