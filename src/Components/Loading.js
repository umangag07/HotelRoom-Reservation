import React from 'react'
import spinner from '../Assets/spinner.gif'
import styled from 'styled-components'
const SpinnerComp = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:${props => props.height ? props.height: "5em"};
    width:${props => props.width ? props.width: "5em"};
    img{
        height:100%;
        width:100%;
        }
`
function Loading() {
    return (
        <>
        <SpinnerComp>
        <img src={spinner} alt=""/>
        </SpinnerComp>
        
            
        </>
    )
}

export default Loading
