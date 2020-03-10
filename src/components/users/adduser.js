import React from 'react'
import styled from 'styled-components'

const adduser = ({handler}) => {
    return (
        <Container onClick={handler}>
            <Add />
            <p>Add</p>
        </Container>
    )
}


const Container = styled.div`
    display:flex;
    margin-left:auto;
    cursor:pointer;

`

const Add = styled.div`
    display:block;
    cursor:pointer;
    position:relative;
    z-index:99999;
    width: 18px;
    height: 18px;
    margin-right:6px; 
    &:before, &:after {
        content:'';
        position:absolute;
        width:100%;
        height:1px;
        background-color:#595859;
        top:50%;
    }
    &:before {
        /* -webkit-transform:rotate(45deg);
        -moz-transform:rotate(45deg);
        transform:rotate(45deg); */
    
    }
    &:after {
        /* -webkit-transform:rotate(-45deg);
        -moz-transform:rotate(-45deg);
        transform:rotate(-45deg); */

        -webkit-transform:rotate(-90deg);
        -moz-transform:rotate(-90deg);
        transform:rotate(-90deg);


    }
`
export default adduser