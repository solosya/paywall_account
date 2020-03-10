import React from 'react'
import styled, {css} from 'styled-components'

const FlexH = (props) => {
    return (
        <Flex {...props}>
            {props.children}
        </Flex>
    )
}

const Flex = styled.div`
    display: flex;
    flex-direction: row;

    ${props => props.active && css`
        background: #f4f4f4;
    `}

    ${props => props.align && css`
        align-items: ${props.align};
    `}

    ${props => props.padding && css`
        padding: ${props.padding};
    `}
    ${props => props.disabled && css`
        /* background: #f4f4f4; */
    `}
    ${props => props.margin && css`
        margin: ${props.margin};
    `}    

 
`

export default FlexH;