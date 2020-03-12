import React from 'react'

import { useField } from 'formik'
import FlexH from '../layout/FlexH'
import InputContainer from './InputContainer'
import Label from './label'
import Input from './input'

import styled from 'styled-components'

// Use forwardRef so that parent can control input focus
const TextInput = React.forwardRef(({ label, ...props }, ref) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);

    if (typeof props.type === 'undefined') props.type = "text";


    return (
        <FlexH padding="20px 0" {...props}>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <InputContainer>
                <Input ref={ref} {...field} {...props}  />
                {meta.touched && meta.error ? (
                    <Error>{meta.error}</Error>
                ) : null}
            </InputContainer>
        </FlexH>
    );
  });







const Error = styled.div`
    position:absolute;
    font-size:12px;
    bottom:-17px;
    color:red;
    font-weight:700;
`

export default TextInput;