import React from 'react'
import styled from 'styled-components'

const label = (props) => {
    return (
        <Label>
            {props.children}
        </Label>
    )
}


const Label = styled.label`
  font-size:16px;
  color:#6c6c6c;
  min-width:40%;
  padding-left:5px;
`

export default label;