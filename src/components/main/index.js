import React from 'react'
import styled from 'styled-components'


import Details from '../details/index'
import Subscriptions from '../subscriptions/index'
import Photosales from '../photosales/index'
import Payments from '../payments/index'
import Users from '../users/index'
import SectionHeader from '../SectionHeader/index'



const main = () => {
    return (
        <Container>
            <div id="details">
                <SectionHeader title="My details" />
                <Details />
            </div>

            <div id="subscription" style={{marginTop: "85px"}}>
                <SectionHeader title="My subscription" />
                <Subscriptions />
            </div>

            <div id="photos" style={{marginTop: "85px"}}>
                <SectionHeader title="Purchase sales" />
                <Photosales />
            </div>

            <div id="payment" style={{marginTop: "85px"}}>
                <SectionHeader title="My payment details" />
                <Payments />
            </div>

            <div id="users" style={{marginTop: "85px"}}>
                <SectionHeader title="My users" />
                <Users />
            </div>
        </Container>
    )
}


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