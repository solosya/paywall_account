import React from 'react'
import styled from 'styled-components'

import SectionHeader from '../SectionHeader/index'
import Divider from '../layout/divider'
import PaymentsItem from './paymentsItem'

 const payments = () => {
    return (
        <div id="payment" style={{marginTop: "85px"}}>
            <SectionHeader title="My payment details" />

            <PaymentsItem 
               label="Payment Method" 
                name="method" 
                disabled={true} 
            />
            <Divider />
            <PaymentsItem 
                label="Card Number" 
                name="cardnumber" 
                disabled={true} 
            >
                <Update>Update Card</Update>
            </PaymentsItem>

            <Divider />
            <PaymentsItem 
                label="Status" 
                name="status" 
                disabled={true} 
            />
            <Divider />
            <PaymentsItem 
                label="Payment Due" 
                name="paymentdue" 
                disabled={true} 
            />
            <Divider />
        </div>
    )
}


const Update = styled.p`
    font-size: 16px;
    color:#4573cd;
    cursor:pointer;
`


export default payments;