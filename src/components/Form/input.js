import React from 'react'
import styled from 'styled-components'


const input = React.forwardRef((props, ref) => {
    return <Input ref={ref} {...props} />
});

const Input = styled.input`
    background:none;
    border:none;
    font-size:16px;
    width:90%;
    &:focus {
        outline:0;
    }
`

export default input;