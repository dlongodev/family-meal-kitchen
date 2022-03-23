import React from 'react'
import { Paragraph, TitleText, Wrapper } from '../styles/Utils.styled'

const HomeSubSection = () => {
    return (
        <Wrapper role="contentinfo" aria-labelledby='subHeader' mqFlex="column" >
            <TitleText id="subHeader">Our Moto is “To Be of Service”</TitleText>
            <Paragraph>We are an Italian-American catering company created by Chef Joseph Longo who has combined the perfect balance of exceptional food and service to create a most unique and unforgettable home dining experience. Familiar Italian-American dishes such as Chicken Parmesan or Mama&apos;s Meatballs are taken to the next level with quality ingredients and unparalleled passion. Whether it&apos;s a family gathering, date night, or business event, allow us <span>“To Be of Service”</span>.</Paragraph>
        </Wrapper>
    )
}

export default HomeSubSection