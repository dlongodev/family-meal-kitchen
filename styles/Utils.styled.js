import styled from "styled-components"

export const Wrapper = styled.section`
background-color: ${({ bg }) => bg || 'var(--light-100)'};
padding: ${({ p }) => p || "1rem"};
max-width:${({ w }) => w || "50rem"};
margin: ${({ m }) => m || "1rem auto"};
display: flex;
flex-direction: ${({ flex }) => flex || "column"};
justify-content: center;
align-items: center;
box-shadow: ${({ shadow }) => shadow};
z-index: 2;
@media screen and (min-width: 800px) {
    flex-direction: ${({ mqFlex }) => mqFlex || "row"}
}
`

export const TitleText = styled.h1`
color: ${({ color }) => color || 'var(--brand-main)'};
margin: 2rem;
font-weight: 700;
text-align: ${({ align }) => align || "center"};
`

export const Paragraph = styled.p`
font-weight: 300;
line-height: 2rem;
margin: ${({ m }) => m || "1rem auto"};
text-align: ${({ align }) => align || "justify"};

span {
    color: var(--brand-main);
    font-weight: 600;
}
`