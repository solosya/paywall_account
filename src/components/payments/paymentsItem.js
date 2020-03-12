import React from 'react'
import FlexH from '../layout/FlexH'
import InputContainer from '../Form/InputContainer'
import Label from '../Form/label'
import Input from '../Form/input'

const paymentsItem = (props) => {

    // can't send props.children through to input (react complains) so we filter it out
    // concat misses props.children
    const inputProps = [].concat(props);

    return (
        <FlexH padding="20px 0" {...props}>
            <Label htmlFor={props.id || props.name}>{props.label}</Label>
            <InputContainer>
                <Input {...inputProps}  />
            </InputContainer>
            {props.children}
        </FlexH>
    );

}


export default paymentsItem;