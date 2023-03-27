import styled from 'styled-components'

export const Grid = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr;
margin: 0.5rem;
gap: 1rem;
@media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
}
`
export const GridSection = styled.section`
width: 100%;
display: grid;
grid-template-columns: 1fr;
padding: 0 1rem 1rem 1rem;
border: 1px solid var(--brand-main);
margin: 0.5rem;
gap: 1rem;
`
export const MenuTitle = styled.h2`
background-color: var(--brand-main);
color: var(--light-100);
padding: 1rem;
text-align: center;
text-transform: uppercase;
`