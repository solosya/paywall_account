import React from 'react'
import styled from 'styled-components'

const user = ({handler, ...props}) => {
    return (
        <Container>
            <Name>{props.firstname} {props.lastname}</Name>
            <Email>{props.email}</Email>
            <Delete onClick={(e) => handler(e, props.count)} href="#">x</Delete>
        </Container>
    )
}

const Container = styled.div`
    height: 65px;
    display:flex;
    align-items:center;
`

const Name = styled.p`
    font-size: 16px;
    color:black;
`

const Email = styled.p`
    font-size: 13px;
    margin-left:auto;
    margin-right:120px;
    color:rgba(0,0,0,.3);
`

const Delete = styled.a`
    text-decoration:none;
`


export default user;