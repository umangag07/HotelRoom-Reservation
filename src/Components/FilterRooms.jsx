import React,{useContext} from 'react'
import styled from 'styled-components'
import {RoomContext} from '../Context'


//get all unique values
const getUnique = (items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}

const FilterComponent = styled.div`
       display:flex;
       width:100vw;
       height:15vh;
       border:2px solid red;
       align-items:center;

`;
function FilterRooms() {

    const context  = useContext(RoomContext);
    console.log(context);
    const{
        handleChange,type,capacity,price,min_price,max_price,breakfast,
    } = context;
    // getting all unique types
    let types = getUnique(context.rooms,'type');
    types =['all',...types];
    //map to jsx
    types = types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <>
        <FilterComponent>
         <form>
             {/* select type */}
             <label>Room Type</label><br/>
             <select name="type" value={type} onChange={handleChange}>
                 {types}
             </select>


             {/* End of slect type */}
             
         </form>
        </FilterComponent>
           
        </>
    )
}

export default FilterRooms
