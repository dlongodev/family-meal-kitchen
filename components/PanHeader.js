import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { ButtonSolid } from '../styles/Button.styled'
import { Paragraph, TitleText, Wrapper } from '../styles/Utils.styled'

const PanContainer = styled.div`
display: flex;
overflow-x: hidden;
justify-content: center;
position: absolute;
top: -18vh;
right: 0;
left: 0;
margin: 0 auto;
width: 100%;
z-index: 1;

`
const Pans = styled.div`
position: relative;
height: 306px;
width: 250px;
margin: 0.3rem;
`

const PanHeader = () => {

    const images = [
        "/img/pan_chicken-francese.png",
        "/img/pan_chicken-parm.png",
        "/img/pan_wings-balsamico.png",
        "/img/pan_caesar-salad.png"
    ]


    return (
        <div style={{ position: "relative" }}>
            <PanContainer>
                {images.map((img, i) => (
                    <Pans key={i}>
                        <Image src={img} layout="fill" objectFit="scale-down" alt='' />
                    </Pans>
                ))}
            </PanContainer>
            <Wrapper bg="var(--light-200)" mqFlex="column" w="100%" m="20vh 0 0 0" style={{ zIndex: 2, position: "relative", boxShadow: "var(--shadowTop)" }}>
                <TitleText>Order by the Pan Menu</TitleText>
                <Paragraph align="center" m="0">One Pan Feeds 6 to 8 People. <br />
                    Chef Joe has counteless other dishes and ethnic cuisines and we will make any special request!

                </Paragraph>
                <Link href={"/menu"} passHref><ButtonSolid m="2rem 0">See Our Menu</ButtonSolid></Link>
            </Wrapper>
        </div>
    )
}

export default PanHeader