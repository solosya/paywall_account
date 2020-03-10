import React from 'react'
import styled from 'styled-components'


import Details from '../details/index'
import Subscriptions from '../subscriptions/index'
import Photosales from '../photosales/index'
import Payments from '../payments/index'
import Users from '../users/index'



const main = () => {
    return (
        <Container>

            <Details />

            <Subscriptions />

            <Photosales />

            <Payments />

            <Users />

        </Container>
    )
}




// Rule down left hand side
const Container = styled.div`
    &:before {
        content:"";
        position:absolute;
        height:100%;
        left:-70px;
        width:1px;
        background-color:rgba(89,89,89,0.3);
    }
`
export default main;