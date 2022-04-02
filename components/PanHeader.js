import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ButtonSolid } from '../styles/Button.styled'
import { Paragraph, TitleText, Wrapper, PanContainer, Pans } from '../styles/Utils.styled'

const PanHeader = () => {

    return (
        <div style={{ position: "relative" }}>
            <PanContainer>
                <Image src="/img/pans-header.png" width={1000} height={200} alt='' />
            </PanContainer>
            <Wrapper bg="var(--light-200)" mqFlex="column" w="100%" m="0" style={{ zIndex: 2, position: "relative", boxShadow: "var(--shadowTop)" }}>
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