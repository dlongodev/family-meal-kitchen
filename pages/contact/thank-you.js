import React from 'react'
import styled from 'styled-components'
import { SectionContainer, H1 } from '.'
import { Paragraph, TitleText } from "../../styles/Utils.styled"
import { GoMailRead } from "react-icons/go"

const Icon = styled.div`
width: 6rem;
height: 6rem;
font-size: 3rem;
margin: 2rem 0;
background-color: var(--brand-400);
border-radius: 50%;
color: white;
display: flex;
align-items: center;
justify-content: center;
`

const ThankYou = () => {
    return (
        <>
            <H1>Contact Us</H1>
            <SectionContainer flex="column" m="0">
                <TitleText color='var(--brand-text)' m='0' fw='300' fs="1.5rem">Thank you for your message!</TitleText>
                <Icon>
                    <GoMailRead />
                </Icon>
                <Paragraph align="center">We will get back to you within 24 hours. Feel free to give us a call at <span>754-264-6268</span> or email at <span><a href="mailto:chefjoe@familymealkitchen.com">chefjoe@familymealkitchen.com</a></span></Paragraph>
            </SectionContainer>
        </>
    )
}

export default ThankYou