import styled from "styled-components"

export const Wrapper = styled.div`
background-color: ${({ bg }) => bg || 'var(--light-100)'};
padding: ${({ p }) => p || "1rem"};
max-width:${({ w }) => w || "50rem"};
margin: ${({ m }) => m || "1rem auto"};
display: flex;
flex-direction: ${({ flex }) => flex || "column"};
justify-content: ${({ justify }) => justify || "center"};
align-items: center;
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
font-weight: 700;
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
position: absolute;
top: -18vh;
right: 0;
left: 0;
margin: 0 auto;
width: 100%;
z-index: 1;

`
export const Pans = styled.div`
position: relative;
height: 306px;
width: 250px;
margin: 0.3rem;
`