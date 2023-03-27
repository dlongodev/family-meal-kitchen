import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FlexDiv, Paragraph, TitleText } from "../../styles/Utils.styled"
import { Form, FormGroup, Input, InputLabel, TextArea } from '../../styles/Form.styled'
import { ButtonSolid } from '../../styles/Button.styled'
import { useRouter } from 'next/router'

export const H1 = styled.h1`
color: var(--brand-main);
margin-top: 3rem;
font-size: 2rem;
text-align: center;
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
align-items: center;
position: relative;
box-shadow: var(--shadow1);
`


const Contact = () => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return
            formData[field.name] = field.value
        })
        await axios.post('api/contact', formData)
        await router.push(`/contact/thank-you`)
    }

    return (
        <>
            <H1>Contact Us</H1>
            <SectionContainer flex="column" m="0">
                <TitleText color='var(--brand-text)' m='0' fw='300' fs="1.5rem">Request a Quote or More Information</TitleText>
                <Paragraph align="center">We’d love to hear from you! Family Meal Kitchen is here to answer any questions that you may have or to begin planning your next event. Please contact us using the form below for catering, private events, or any general inquiries. <br /> Feel free to give us a call at <span>754-264-6268</span> or email at <span><a href="mailto:chefjoe@familymealkitchen.com">chefjoe@familymealkitchen.com</a></span></Paragraph>
                <Form onSubmit={handleSubmit}>
                    <InputLabel htmlFor='customer'>Name: </InputLabel>
                    <Input required id='customer' name='customer' placeholder='John Doe' type="text" />
                    <FormGroup>
                        <fieldset>
                            <InputLabel htmlFor='email'>Email: </InputLabel>
                            <Input required id='email' name='email' placeholder='john@email.com' type="text" />
                        </fieldset>
                        <fieldset>
                            <InputLabel htmlFor='phone'>Phone Number:</InputLabel>
                            <Input required id='phone' name='phone' placeholder='772-555-5555' type="text" />
                        </fieldset>
                    </FormGroup>
                    <FormGroup>
                        <fieldset>
                            <InputLabel htmlFor='eventType'>Event Type: </InputLabel>
                            <Input required id='eventType' name='eventType' placeholder='i.e.: Birthday, Dinner Party' type="text" />
                        </fieldset>
                        <fieldset>
                            <InputLabel htmlFor='eventLocation'>Event Location:</InputLabel>
                            <Input required id='eventLocation' name='eventLocation' placeholder='Hobe Sound, FL' type="text" />
                        </fieldset>
                    </FormGroup>
                    <FormGroup>
                        <fieldset>
                            <InputLabel htmlFor='eventDate'>Event Date: </InputLabel>
                            <Input required id='eventDate' name='eventDate' type="date" />
                        </fieldset>
                        <fieldset>
                            <InputLabel htmlFor='guestCount'>Approximate Guest Count: </InputLabel>
                            <Input required id='guestCount' name='guestCount' type="text" />
                        </fieldset>
                    </FormGroup>
                    <InputLabel htmlFor='about'>Tell us about your event:</InputLabel>
                    <TextArea rows={5} id='about' name='about' placeholder='Any special details you would like to share about your event' type="text" />
                    <FlexDiv justify='flex-start' m="0">
                        <ButtonSolid m="1rem 0 0 0" w="inherit" type='submit'>Submit Form</ButtonSolid>
                    </FlexDiv>
                </Form>
            </SectionContainer>
        </>
    )
}

export default Contact