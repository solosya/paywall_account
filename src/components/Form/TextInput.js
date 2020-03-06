import React from 'react'

import { useField } from 'formik'
import FlexH from '../layout/FlexH'

import styled from 'styled-components'

const TextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);

    if (typeof props.type === 'undefined') props.type = "text";
    return (
        <FlexH padding="20px 0" {...props}>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <InputContainer>
                <Input {...field} {...props} />
                {meta.touched && meta.error ? (
                    <Error>{meta.error}</Error>
                ) : null}
            </InputContainer>
        </FlexH>
    );
  };



const Label = styled.label`
  font-size:16px;
  color:#6c6c6c;
  min-width:40%;
  padding-left:5px;
`

const InputContainer = styled.div`
    position:relative;
    flex-grow:1;
`


const Input = styled.input`
    background:none;
    border:none;
    font-size:16px;
    &:focus {
        outline:0;
    }
`


const Error = styled.div`
    position:absolute;
    font-size:12px;
    bottom:-17px;
    color:red;
    font-weight:700;
`

export default TextInput;