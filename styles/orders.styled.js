import styled from "styled-components";

export const OrderSectionContainer = styled.section`
margin: 2rem;
margin-bottom: 3rem;
display: grid;
grid-template-columns: 65% 35%;
gap: 1rem;
@media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
}
`

export const OrderTable = styled.table`
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

td:nth-child(2){
    font-weight: 700;
    color: var(--brand-dark);
}
@media screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    tr:first-child{
        display: none;
    }
    tr{
        display: flex;
        flex-direction: column;
    }
    td:first-child::before{
        content: "Order ID: ";
        font-weight: 700;
    }
    td:last-child::before{
        content: "Total: ";
        font-weight: 700;
    }
}

`
export const OrderTotalText = styled.p`
color: var(--light-100);
margin-bottom: 0.5rem;
font-weight: 300;

strong{
    font-weight: 700;
    margin-right: 5px;
}
`
export const OrderTotalWrapper = styled.div`
margin: 0 auto;
`
export const OrderCompleted = styled.button`
padding: 1em 3em;
border-radius: 0.5rem;
margin: 1rem 0;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 1px;
color: var(--warning);
background-color: var(--light-200);
border: 2px solid var(--warning);
cursor: not-allowed;
`