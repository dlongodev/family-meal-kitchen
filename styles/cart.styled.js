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

export const CartTable = styled.table`
width: 100%;
border-spacing: 0;
text-align: left;

th{
    background-color: var(--brand-200);
    padding: 1rem;
}
td{
    text-align: left;
    padding: 1rem;
    border-bottom: 1px dotted var(--brand-300);
}
td:nth-child(2), th:nth-child(2){
    text-align: center;
}
td:first-child{
    font-weight: 700;
    color: var(--brand-dark);
}
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
export const GridTable = styled.div`
display: grid;
grid-template-columns: 3fr 1fr 1fr 0.5fr;
align-items: center;
text-align: center;
gap: 0.5rem;
width: min(30rem, 90%);
margin: 0 auto;
padding: 2rem 0 1rem 0;

div:first-child{
    font-weight: 700;
    text-align: left;
}
@media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    div:first-child {
        grid-column: span 4;
    }
}

`

export const ButtonDelete = styled.button`
  border: none;
  padding: 0.5rem;
  background-color: var(--warning);
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--brand-main);
  border-radius: 5px;
`;
export const QtyBtn = styled.button`
  color: var(--brand-main);
  background-color: transparent;
  border: none;
  font-size: 1.3rem;
  padding: 0 0.8rem;
  cursor: pointer;
`;
