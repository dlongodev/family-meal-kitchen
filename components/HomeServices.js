import React from 'react'
import { services } from '../data/services-data'
import styled from 'styled-components'
import { Wrapper } from '../styles/Utils.styled'
import ServiceCard from './ServiceCard'

const Section = styled.section`
background-color: var(--brand-main);
width: 100%;
margin: 3rem auto;

`

const HomeServices = () => {

    return (
        <Section >
            <Wrapper bg="transparent" p="2rem 0" w="60rem" >
                {services?.map((service, i) => (
                    <div key={i}>
                        < ServiceCard title={service.title} href={service.href} image={service.image} />
                    </div>
                ))}
            </Wrapper>
        </Section>
    )
}

export default HomeServices