import styled from "styled-components"

export const Wrapper = styled.div`
background-color: ${({ bg }) => bg || 'var(--light-100)'};
padding: ${({ p }) => p || "1rem"};
max-width:${({ w }) => w || "50rem"};
margin: ${({ m }) => m || "1rem auto"};
display: flex;
flex-direction: ${({ flex }) => flex || "column"};
justify-content: ${({ justify }) => justify || "center"};
align-items: ${({ align }) => align || "center"};
box-shadow: ${({ shadow }) => shadow};
z-index: 2;
@media screen and (min-width: 800px) {
    flex-direction: ${({ mqFlex }) => mqFlex || "row"}
}
`

export const TitleText = styled.h2`
color: ${({ color }) => color || 'var(--brand-main)'};
font-size:${({ fs }) => fs || "1.8rem"};
margin: ${({ m }) => m || "2rem"};
font-weight: ${({ fw }) => fw || "700"};
text-align: ${({ align }) => align || "center"};
@media screen and (min-width: 800px) {
    flex-direction: ${({ mqFlex }) => mqFlex || "row"};
    text-align: ${({ mqAlign }) => mqAlign || "center"};
}
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

export const PanContainer = styled.div`
display: flex;
overflow-x: hidden;
justify-content: center;
position: relative;
margin: 0 auto;
z-index: 1;
`
export const Pans = styled.div`
position: relative;
height: 200px;
width: 1000px;
margin: 0.3rem;
`

export const FlexDiv = styled.div`
width: 100%;
display: flex;
flex-direction: ${({ flex }) => flex || "row"};
justify-content: ${({ justify }) => justify || "center"};
align-items: ${({ align }) => align || "center"};
flex-basis: content;
margin:${({ m }) => m || "0.5rem"};
@media screen and (max-width: 800px) {
    flex-direction: ${({ mqFlex }) => mqFlex || "column"};
    justify-content: ${({ mqJustify }) => mqJustify || "center"};align-items: ${({ mqAlign }) => mqAlign || "center"};
}

`