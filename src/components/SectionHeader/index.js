import React from 'react'
import styled from 'styled-components'


const SectionHeader = (props) => {
    return (
        <Header>
            {props.title}
        </Header>
    )
}

const Header = styled.div`
    font-size: 26px;
    color: #343434;
    font-weight:300;
    padding-bottom:15px;
    border-bottom: 1px solid rgba(89,89,89,.5);
    margin-bottom:25px;
`

export default SectionHeader;