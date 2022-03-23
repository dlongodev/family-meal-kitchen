import Image from 'next/image'
import React from 'react'
import { Wrapper } from '../styles/Utils.styled'
import styled from 'styled-components'
import { ButtonOutlined } from '../styles/Button.styled'
import Link from 'next/link'

const UnderlineTitle = styled.h2`
font-size: 1.2rem;
font-weight: 400;
text-transform: uppercase;
border-bottom: 5px solid var(--brand-main);
`

const ServiceCard = (props) => {
    return (
        <Wrapper mqFlex="column" m="1rem" >
            <UnderlineTitle>{props.title}</UnderlineTitle>
            <Image src={props.image} width="263px" height="175px" alt='' />
            <Link href={props.href} passHref>
                <ButtonOutlined m="2rem 0 1rem 0" >LEARN MORE</ButtonOutlined>
            </Link>
        </Wrapper>
    )
}

export default ServiceCard