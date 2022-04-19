import React from 'react'
import styled from 'styled-components'
import { FlexDiv, Paragraph, TitleText, Wrapper } from '../styles/Utils.styled'
import { FormGroup, Form, Input, InputLabel, TextArea, RadioChoices } from '../styles/Form.styled'
import { BtnLinkOutlined, ButtonSolid } from '../styles/Button.styled'
import Link from 'next/link'

const H1 = styled.h1`
color: var(--brand-main);
margin-top: 2rem;
font-size: 2rem;
`

export const SectionContainer = styled.section`
display: flex;
flex-direction: column;
padding: 2rem;
background-color: white;
border-radius: 1rem;
width: min(55rem, 90%);
margin: 2rem auto;
justify-content: center;
align-items: flex-start;
position: relative;
box-shadow: var(--shadow1);
`

const handleSubmit = (e) => {
    e.preventDefault()

}

const Contact = () => {
    return (
        <>
            <Wrapper mqFlex="column">
                <H1>Contact Us</H1>
                <TitleText color='var(--brand-text)' m='0' fw='300' fs="1.5rem">Request a Quote or More Information</TitleText>
            </Wrapper>
            <SectionContainer flex="column" m="0">
                <Paragraph align="center">We’d love to hear from you! Family Meal Kitchen is here to answer any questions that you may have or to begin planning your next event. Please contact us using the form below for catering, private events, or any general inquiries and we will get back to you within 24 hours. <br /> Feel free to give us a call at <span>754-264-6268</span> or email at <span><a href="mailto:chefjoe@familymealkitchen.com">chefjoe@familymealkitchen.com</a></span></Paragraph>
                <Form onSubmit={handleSubmit}>
                    <InputLabel htmlFor='customer'>Name: </InputLabel>
                    <Input required id='customer' name='customer' placeholder='John Doe' type="text" onChange={(e) => setContactName(e.target.value)} />
                    <FormGroup>
                        <fieldset>
                            <InputLabel htmlFor='email'>Email: </InputLabel>
                            <Input required id='email' name='email' placeholder='john@email.com' type="text" onChange={(e) => setEmail(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <InputLabel htmlFor='phone'>Phone Number:</InputLabel>
                            <Input required id='phone' name='phone' placeholder='772-555-5555' type="text" onChange={(e) => setPhone(e.target.value)} />
                        </fieldset>
                    </FormGroup>
                    <FormGroup>
                        <fieldset>
                            <InputLabel htmlFor='eventType'>Event Type: </InputLabel>
                            <Input required id='eventType' name='eventType' placeholder='i.e.: Birthday, Dinner Party' type="text" onChange={(e) => setEventType(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <InputLabel htmlFor='eventLocation'>Event Location:</InputLabel>
                            <Input required id='eventLocation' name='eventLocation' placeholder='Hobe Sound, FL' type="text" onChange={(e) => setEventLocation(e.target.value)} />
                        </fieldset>
                    </FormGroup>
                    <FormGroup>
                        <fieldset>
                            <InputLabel htmlFor='deliveryDate'>Event Date: </InputLabel>
                            <Input required id='deliveryDate' name='deliveryDate' type="date" onChange={(e) => setEventDate(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <InputLabel htmlFor='guestCount'>Approximate Guest Count: </InputLabel>
                            <Input required id='guestCount' name='guestCount' type="text" onChange={(e) => setGuestCount(e.target.value)} />
                        </fieldset>
                    </FormGroup>
                    <InputLabel htmlFor='instructions'>Tell us about your event:</InputLabel>
                    <TextArea rows={5} id='instructions' name='instructions' placeholder='Any special details you would like to share about your event' type="text" onChange={(e) => setFormData({ ...formData, instructions: e.target.value })} />
                    <FlexDiv justify='flex-start' m="0">
                        <ButtonSolid m="1rem 0 0 0" w="inherit" type='submit'>Submit Form</ButtonSolid>
                    </FlexDiv>
                </Form>
            </SectionContainer>
        </>
    )
}

export default Contact