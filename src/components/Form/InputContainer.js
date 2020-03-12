import React from 'react'
import styled from 'styled-components'

const InputContainer = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}


const Container = styled.div`
    position:relative;
    flex-grow:1;
`
export default InputContainer;