import styled from "styled-components";

export const SectionContainer = styled.section`
display: flex;
flex-direction: column;
padding: 2rem;
background-color: white;
border-radius: 1rem;
width: min(55rem, 90%);
margin: 2rem auto;
justify-content: center;
align-items: flex-start;
position: relative;
box-shadow: var(--shadow1);
/* margin: 2rem;
margin-bottom: 3rem;
display: grid;
grid-template-columns: 65% 35%;
gap: 1rem;
@media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
} */
`


export const CartTotalText = styled.p`
font-weight: 700;
`

export const CartTotalWrapper = styled.div`
margin: 0 auto;
width: min(30rem, 90%);
display: flex;
justify-content: space-between;
border-top: 1px solid var(--brand-main);
`
export const CartTotalBtn = styled.button`
background-color: transparent;
color: var(--brand-main);
padding: 1em 3em;
border: 2px solid var(--brand-500);
border-radius: 0.5rem;
margin: 1rem 0;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 1px;
cursor: pointer;

&:hover{
    color: var(--light-100);
    background-color: var(--brand-main);
    border: 2px solid var(--brand-main)
}

&:disabled{
    color: var(--warning);
    background-color: var(--light-200);
    border: 2px solid var(--warning);
    cursor: not-allowed;
}
`
export const CartItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 0.5rem;
width: min(30rem, 90%);
margin: 0 auto;
padding: 2rem 0 1rem 0;

@media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
}
`
export const CartQtyContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;
width: 100%;

@media screen and (max-width: 600px) {
    justify-content: flex-end;
}
`

export const ButtonDelete = styled.button`
  color: var(--warning);
  background-color: var(--light-100);
  width: 20px;
  height: 20px;
  box-sizing: content-box;
  padding: 8px;
  cursor: pointer;
  border-radius: 100%;
`;