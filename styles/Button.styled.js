import styled from "styled-components"

export const ButtonSolid = styled.a`
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
&:hover {
    background-color: ${({ bghover }) => bghover || 'var(--brand-500)'};
}
`

export const ButtonOutlined = styled.a`
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
&:hover {
    border: 2px solid var(--brand-main);
    border-color: ${({ bcolorhover }) => bcolorhover} ;
    color: ${({ colorhover }) => colorhover || 'var(--brand-main)'};
    background-color: var(--brand-200);
}
`