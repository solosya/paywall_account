import React from 'react'
import Dotdotdot    from 'react-dotdotdot'
import styled from 'styled-components'
import FlexH from '../layout/FlexH'



const card = (props) => {


    return (
        <FlexH {...props.styles}>
            <Figure>
                <picture>
                    <source media="(max-width: 500px)" srcSet={props.image} />
                    <source media="(min-width: 501px) and (max-width: 767px)" srcSet={props.image} />
                    <Image draggable="false" src={props.image} alt={props.caption} />
                </picture>
            </Figure>
            
            <Container>
                <Title><Dotdotdot clamp={2}>{ props.title} </Dotdotdot></Title>

                <Type>{ props.type }</Type>

                <Size>{props.size}</Size>
            </Container>
        </FlexH>    
    )
}


const Figure = styled.figure`
    width:133px;
    height:82px;
    margin-right: 20px;
`
const Image = styled.img`
    height:100%;
    width:100%;
`

const Title = styled.h1`
    font-size:16px;
    font-weight:500;
    margin-bottom:10px;
`
const Container = styled.div`
    padding-top:15px;
`

const Type = styled.p`
    color:#616161;
    font-size:12px;
    text-transform:uppercase;
`

const Size = styled.p`
    color:#616161;
    font-size:14px;

`


export default card;