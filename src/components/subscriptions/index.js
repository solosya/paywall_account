import React, {Component} from 'react'
import styled from 'styled-components'

import Divider from '../layout/divider'
import FlexH from '../layout/FlexH'
import SectionHeader from '../SectionHeader/index'



 class Subscriptions extends Component {

    state = {
        plan: {
            "name": "Awesome Plan",
            "price": "$15",
            "features": [
                "Works well",
                "Never fails",
                "Sometimes fails",
                "She'll be right"
            ],
            "recentPurchase": "30 October 2019"
        }
    }

    cancelSubscription = (e) => {
        e.preventDefault();
        alert('canceling subscription');
    }


    render() {


        return (
            <div id="subscription" style={{marginTop: "85px", position: 'relative'}}>
                <SectionHeader title="My subscription">
                    <CancelContainer>
                        <Cancel onClick={this.cancelSubscription} href="/cancel">Cancel Subscription</Cancel>
                    </CancelContainer>
                </SectionHeader>
            

                <div style={{position: 'relative'}}>

                    <PlanName>{this.state.plan.name}</PlanName>
                    <PlanChange href="/change">Change Plan</PlanChange>
                    <Sitename>Child site name goes here</Sitename>
                    <Price>{this.state.plan.price}</Price>
                    <List>
                        {this.state.plan.features.map((feature) => {
                            return <Item>{feature}</Item>
                        })}
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
                        <p>{this.state.plan.recentPurchase}</p>
                    </FlexH>
        
                    <Divider />
                </div>
            </div>
        )
    }
    
}


const PlanChange = styled.a`
    position:absolute;
    right:0;
    top:0;
    color: #4573cd;
    font-size: ${props => {
        return `${ 16 / props.theme.baseFontSize}rem`;
    }};
`

const CancelContainer = styled.div`
    display:flex;
    flex-grow:2;
    align-items: center;
    justify-content: flex-end;
`


const Cancel = styled.a`
    color: #4573cd;
    font-size: ${props => {
        return `${ 13 / props.theme.baseFontSize}rem`;
    }};
    text-decoration:none;
`

const PlanName = styled.h1`
    font-size: ${props => {
        return `${ 18 / props.theme.baseFontSize}rem`;
    }};
    font-weight:500;
    color: #2b2a2a;
`

const Sitename = styled.p`
    font-size: ${props => {
        return `${ 12 / props.theme.baseFontSize}rem`;
    }};
    text-transform: uppercase;
    margin-top:10px;
    margin-bottom:15px;
`
const Price = styled.div`
    font-size: ${props => {
        return `${ 16 / props.theme.baseFontSize}rem`;
    }};
    color:#444444;
    font-weight:500;
    margin-bottom:15px;
`

const List = styled.ul`
    margin-left:30px;
    margin-bottom:20px;
`

const Item = styled.li`
    font-size: ${props => {
        return `${ 13 / props.theme.baseFontSize}rem`;
    }};
    font-weight:300;
    margin-bottom:10px;
`


const Purchase = styled.button`
    background: rgb(69 115 205);
    padding: 0 30px;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: ${props => {
        return `${ 16 / props.theme.baseFontSize}rem`;
    }};
    height:44px;
    position: absolute;
    right: 15px;
    margin-left:auto;
    cursor:pointer;
`

export default Subscriptions;