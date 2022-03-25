import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: relative;
width: 100%;
padding: 0.5rem;
transition: all 0.2s ease-in-out;

&:hover {
    box-shadow: var(--shadow0);
    transform: scale(1.02);
}
`
const ItemTitle = styled.h3`
font-size: 1rem;
font-weight: 700;
letter-spacing: 1px;

`

const MenuItemCard = ({ title, desc, price }) => {
    return (
        <Container>
            <ItemTitle>{title}</ItemTitle>
        </Container>
    )
}

export default MenuItemCard