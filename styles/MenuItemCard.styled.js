import styled from 'styled-components'

export const MenuItemContainer = styled.div`
position: relative;
width: 100%;
padding: 0.5rem;
transition: all 0.2s ease-in-out;
margin-bottom: 1rem;


&:hover, &:focus {
    box-shadow: var(--shadow0);
    transform: scale(1.02);
    background-color: var(--light-20);
}
&:focus{
    outline: 2px solid var(--brand-300);
}

// add condition for added to cart
background-color: ${({ itemAdded }) => itemAdded};
`
export const ItemTitle = styled.h3`
font-size: 1rem;
font-weight: 700;
/* letter-spacing: 1px; */
margin:0.3rem 0 0 0;
padding: 0.2rem;
color: var(--brand-500);
line-height: 1.3rem;
`
export const ItemPrice = styled.span`
color: var(--brand-text);
padding-left: 5px;
`
export const ItemDesc = styled.p`
padding: 0.3rem;
margin:0.5rem 0;
font-size: 0.8rem;
font-style: italic;
font-weight: 400;
letter-spacing: 0;
line-height: 1.2rem;
`
export const Cart = styled.div`
display: flex;
align-items: center;
margin: 0;
align-items: center;
justify-content: flex-end;
`
export const Quantity = styled.input`
font-size: 1rem;
height: 35px;
border: 1px solid var(--brand-300);
padding: 0.3rem 0.6rem;
background-color: var(--light-100);
`
export const CartBtnAdd = styled.button`
color: var(--light-100);
background-color: var(--brand-main);
border: none;
font-size: 0.7rem;
text-transform: uppercase;
font-weight: 700;
height: 35px;
padding: 0 0.6rem;
cursor: pointer;
`
export const QtyBtn = styled.button`
color: var(--brand-main);
background-color: transparent;
border: none;
font-size: 1.3rem;
cursor: pointer;
`