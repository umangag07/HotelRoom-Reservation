import React from 'react'
import styled from 'styled-components'

const Container =  styled.div`
    width:100vw;
    height:${props=>props.height?props.height:'100vh'};
    display:flex;
    justify-content:center;
    align-items:center;
    background-image:url(${props=>props.src});
    background-size: 100% 100%;
    
`
function BackgroundImg(props) {
    const{imgSrc,height,children} = props
    return (
        <>
        <Container height={height} src={imgSrc} >
           {children}
        </Container>
            
        </>
    )
}

export default BackgroundImg