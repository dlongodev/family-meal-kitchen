import styled from "styled-components"

export const BtnLinkSolid = styled.a`
display: inline-block;
text-decoration: none;
font-family: inherit;
border-radius: 0.5rem;
border: 0;
align-items: center;
text-align: center;
background-color: ${({ bg }) => bg || 'var(--brand-main)'};
color: ${({ color }) => color || 'var(--light-100)'};
font-size:${({ fs }) => fs || "0.9rem"};
font-weight: 700;
padding: ${({ p }) => p || "0.8rem 1.5em"};
margin: ${({ m }) => m || "0.3rem"};
cursor: pointer;
flex-basis: fit-content;
&:hover {
    background-color: ${({ bghover }) => bghover || 'var(--brand-500)'};
}
`

export const BtnLinkOutlined = styled.a`
text-decoration: none;
font-family: inherit;
width:${({ w }) => w || "10rem"};
border-radius: 0.5rem;
border: 2px solid var(--brand-text);
border-color: ${({ bcolor }) => bcolor};
align-items: center;
text-align: center;
background-color: ${({ bg }) => bg || 'transparent'};
color: ${({ color }) => color || 'var(--brand-text)'};
font-size:${({ fs }) => fs || "0.9rem"};
font-weight: 700;
padding: ${({ p }) => p || "0.8rem 1.5em"};
margin: ${({ m }) => m || "0rem"};
flex-basis: fit-content;
cursor: pointer;
&:hover {
    border: 2px solid var(--brand-main);
    border-color: ${({ bcolorhover }) => bcolorhover} ;
    color: ${({ colorhover }) => colorhover || 'var(--brand-main)'};
    background-color: var(--brand-200);
}
`

export const ButtonSolid = styled.button`
display: inline-block;
text-decoration: none;
font-family: inherit;
border-radius: 0.5rem;
border: 0;
align-items: center;
text-align: center;
border: 2px solid var(--brand-main);
width:${({ w }) => w || "10rem"};
background-color: ${({ bg }) => bg || 'var(--brand-main)'};
color: ${({ color }) => color || 'var(--light-100)'};
font-size:${({ fs }) => fs || "0.9rem"};
font-weight: 700;
padding: ${({ p }) => p || "0.8rem 1.5em"};
margin: ${({ m }) => m || "0.3rem"};
cursor: pointer;
flex-basis: fit-content;
&:hover {
    background-color: ${({ bghover }) => bghover || 'var(--brand-500)'};
}
`

export const ButtonOutlined = styled.button`
text-decoration: none;
font-family: inherit;
width:${({ w }) => w || "10rem"};
border-radius: 0.5rem;
border: 2px solid var(--brand-text);
border-color: ${({ bcolor }) => bcolor};
align-items: center;
text-align: center;
background-color: ${({ bg }) => bg || 'transparent'};
color: ${({ color }) => color || 'var(--brand-text)'};
font-size:${({ fs }) => fs || "0.9rem"};
font-weight: 700;
padding: ${({ p }) => p || "0.8rem 1.5em"};
margin: ${({ m }) => m || "0rem"};
cursor: pointer;
&:hover {
    border: 2px solid var(--brand-main);
    border-color: ${({ bcolorhover }) => bcolorhover} ;
    color: ${({ colorhover }) => colorhover || 'var(--brand-main)'};
    background-color: var(--brand-200);
}
`