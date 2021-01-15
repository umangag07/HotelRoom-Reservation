import React, { Component } from 'react'
import {RoomContext} from '../Context'
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
import Marginer from "./Marginer";

export class FeaturedComponents extends Component {
    static contextType = RoomContext
    render() {
        const value = this.context;
        const name = value.name;
        const greet = value.greet;
        console.log(value)
        return (
            <div>
                <Title line="Featured Rooms"/>
                <Marginer direction="vertical" margin="3.5em" />
                {greet} {name} from featured rooms 
                <Loading/>
                <Room/>
            </div>
        )
    }
}

export default FeaturedComponents
