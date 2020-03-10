import React from 'react'
import styled from 'styled-components'


const SectionHeader = (props) => {
    return (
        <Header>
            <Title>{props.title}</Title>
            {props.children}
        </Header>
    )
}

const Header = styled.div`
    display:flex;
    position:relative;
    border-bottom: 1px solid rgba(89,89,89,.5);
    margin-bottom:25px;
`

const Title = styled.h1`
    font-size: 26px;
    color: #343434;
    font-weight:300;
    padding-bottom:15px;

`

export default SectionHeader;