import React from 'react'
import styled from 'styled-components'

import Divider from '../layout/divider'
import FlexH from '../layout/FlexH'
import SectionHeader from '../SectionHeader/index'



 const subscriptions = () => {
    return (
        <div id="subscription" style={{marginTop: "85px"}}>
            <SectionHeader title="My subscription" />

            <PlanName>Plan name goes here</PlanName>
            <Sitename>Child site name goes here</Sitename>
            <Price>$15</Price>
            <List>
                <Item>Feature lorem ipsum florio serwioth </Item>
                <Item>Feature lorem ipsum florio serwioth </Item>
                <Item>Feature lorem ipsum florio serwioth </Item>
                <Item>Feature lorem ipsum florio serwioth </Item>
            </List>
            <Divider />
            <FlexH align="center" padding="20px 0">
                <p style={{width: "40%"}}>Articles remaining</p>
                <p>8 articles</p>
                <Purchase>Buy more</Purchase>
            </FlexH>

            <Divider />
            <FlexH align="center"  padding="20px 0">
                <p style={{width: "40%"}}>Most recent purchase</p>
                <p>30 October 2019</p>
            </FlexH>

            <Divider />
        </div>
    )
}

const PlanName = styled.h1`
    font-size:18px;
    font-weight:500;
    color: #2b2a2a;
`

const Sitename = styled.p`
    font-size:12px;
    text-transform: uppercase;
    margin-top:10px;
    margin-bottom:15px;
`
const Price = styled.div`
    font-size:16px;
    color:#444444;
    font-weight:500;
    margin-bottom:15px;
`

const List = styled.ul`
    margin-left:30px;
    margin-bottom:20px;
`

const Item = styled.li`
    font-size:13px;
    font-weight:300;
    margin-bottom:10px;
`


const Purchase = styled.button`
    background: rgb(69 115 205);
    padding: 0 30px;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 16px;
    height:44px;
    position: absolute;
    right: 15px;
    margin-left:auto;
    cursor:pointer;
`

export default subscriptions;