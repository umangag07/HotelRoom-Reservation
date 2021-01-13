import React, { Component } from 'react'
import {RoomContext} from '../Context'


export class FeaturedComponents extends Component {
    static contextType = RoomContext
    render() {
        const value = this.context;
        const name = value.name;
        const greet = value.greet;
        console.log(value)
        return (
            <div>
                {greet} {name} from featured rooms 
            </div>
        )
    }
}

export default FeaturedComponents
