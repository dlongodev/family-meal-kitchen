import Image from 'next/image'
import React from 'react'
import { Paragraph, TitleText, Wrapper } from '../styles/Utils.styled'
import styled from "styled-components"
import Link from 'next/link'

const AboutContainer = styled.section`
display: grid;
grid-template-columns: 1fr;
justify-content: center;
align-items: center;
margin: 1rem auto 0 auto;
width: 100%;
text-align: center;
@media screen and (min-width: 800px) {
    grid-template-columns: 20rem 1fr;
    padding: 1rem;
    max-width: 1000px;
    align-items: flex-start;
}
`
const ImageContainer = styled.div`
position: relative;
padding: 2rem;

span {
    border-radius: 0.4rem;
    box-shadow: var(--shadow2);
}

`
const H1 = styled.h1`
color: var(--brand-main);
margin-top: 2rem;
font-size: 2rem;
`

const TextContainer = styled.div`
/* width: max(30rem, 80%); */
margin: 1rem;
`

const PhotoGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 0.5rem;
margin: 1rem auto;
@media screen and (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
}

`

const About = () => {
    return (
        <>
            <Wrapper mqFlex="column">
                <H1>About Us</H1>
                <TitleText color='var(--brand-text)' m='0' fw='300'>Meet Chef Joe Longo</TitleText>
            </Wrapper>
            <AboutContainer>
                <ImageContainer>
                    <Image src="/img/Chef-Joe-Longo.jpg" width="400px" height="400px" alt="headshot photo of Chef Joe Longo" objectFit='cover' />
                </ImageContainer>
                <TextContainer>
                    <Paragraph m="0 1rem 1rem 1rem" ><span>“To be of service”</span> has been the lifelong mantra for Executive Chef Joseph Longo.  This coupled with a tremendous work ethic, passion for one’s craft, and his never ending commitment to excellence has propelled Chef Longo’s 38 year career with an impressive resume leading some of the finest Private clubs, hotels, and restaurants in America. His award winning cuisine and upbeat personality has truly prepared him to bring this one of a kind dining experience to your home. The happily married father of 4 believes that family comes first and to feed one’s family has no greater reward hence Chef Joe has chosen the name <span>Family Meal Kitchen, LLC</span> as his first privately owned catering business.
                    </Paragraph>
                </TextContainer>
            </AboutContainer>
            <Wrapper mqFlex="column" w="1000px" bg='var(--light-200)'>
                <Paragraph align="center"><Link href="/contact"><a><span>Click here</span></a></Link> to book an event or simply call <span>754-264-6268</span> to talk with Chef Joe!</Paragraph>
            </Wrapper>
            <Wrapper mqFlex="column" w="1000px">
                <Paragraph align="center" m="0 1rem 1rem 1rem" >
                    Chef Joe will bring his years of experience creating unique and one of a kind dining experiences. Chef has been leading some of the finest country clubs, restaurants, and hotels in the country.
                </Paragraph>
                <PhotoGrid>
                    {["1", "2", "3", "4"].map(num => (
                        <Image src={`/img/chef-joe-longo_${num}.jpg`} width={500} height={500} alt={`Photo of Chef Joe Longo number ${num}`} key={num} />
                    ))}
                </PhotoGrid>
            </Wrapper>
        </>
    )
}

export default About