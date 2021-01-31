import React, { useContext } from "react";
import styled from "styled-components";
import { RoomContext } from "../Context";
import "../index.css";

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const FilterComponent = styled.div`
  display: flex;
  width: 100vw;
  height: 15vh;
  flex-wrap: wrap;
  /* border:2px solid red; */
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  justify-content: space-between;
`;
function FilterRooms() {
  const context = useContext(RoomContext);
  // console.log(context);
  const {
    handleChange,
    type,
    capacity,
    price,
    min_price,
    max_price,
    breakfast,
  } = context;
  // getting all unique types
  let types = getUnique(context.rooms, "type");
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let People = getUnique(context.rooms, "capacity");
  People = People.map((number, index) => {
    return (
      <option value={number} key={index}>
        {number}
      </option>
    );
  });

  return (
    <>
      <FilterComponent>
        <form className="select">
          {/* select type */}
          <label>Room Type</label>
          <br />
          <select name="type" value={type} onChange={handleChange}>
            {types}
          </select>

          {/* End of slect type */}
        </form>
        <form className="select">
          {/* Guest*/}
          <label>Guests</label>
          <br />
          <select name="capacity" value={capacity} onChange={handleChange}>
            {People}
          </select>

          {/* Guest */}
        </form>
        <form>
          {/*Room Price*/}
          <label>
            Price Rs <mark class="Red">{price}</mark>{" "}
          </label>
          <br />
          <input
            type="range"
            name="price"
            min={min_price}
            max={max_price}
            value={price}
            onChange={handleChange}
          />

          {/* Room Guest */}
        </form>
        <form className="select">
          {/* Breakfast*/}
           <input type="checkbox" checked={breakfast} name="breakfast" onChange={handleChange}/>
           <label htmlFor="breakfast">Breakfast</label>
         
        

          {/* Breakfast */}
        </form>
      </FilterComponent>
    </>
  );
}

export default FilterRooms;
