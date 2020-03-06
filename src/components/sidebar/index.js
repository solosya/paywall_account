import React from 'react'
import styled from 'styled-components'

const sidebar = () => {
    return (
        <Container>
            <Links>
                <PageLink href="#details">Details here</PageLink>
                <PageLink href="#subscription">Subscription</PageLink>
                <PageLink href="#photos">Photo sales</PageLink>
                <PageLink href="#payments">Payments</PageLink>
                <PageLink href="#users">Users</PageLink>
            </Links>

            <Help>
                <p>Need help with your account?</p>
                <p>Read our FAQs here</p>
            </Help>
        </Container>

    )
}

const Container = styled.div`
    position:fixed;
`
const Links = styled.div`
    margin-bottom:100px;
`
const Help = styled.div`
    margin-bottom:100px;
`


const PageLink = styled.a`
    display:block;
    margin-bottom: 10px;
    font-size: 16px;
    font-family:Roboto;
    color:#4573cd;
    text-decoration:none;
`


export default sidebar;