import React, { useState } from 'react'
import { MenuItemContainer, ItemTitle, ItemPrice, ItemDesc, Cart, Quantity, CartBtnAdd, QtyBtn } from '../styles/MenuItemCard.styled'
import { useDispatch } from 'react-redux'
import { addMenuItem } from '../redux/cartSlice'

const MenuItemCard = ({ menuItem }) => {
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(menuItem.price)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addMenuItem({ ...menuItem, quantity, price }))
    }

    const handleAdd = () => {
        setQuantity(++quantity)
    }

    const handleSubtract = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
    }

    return (
        <MenuItemContainer tabIndex={0}>
            <ItemTitle>{menuItem.title} <ItemPrice>${menuItem.price}</ItemPrice></ItemTitle>
            <ItemDesc>{menuItem.desc}</ItemDesc>
            <Cart>
                <Quantity>
                    <QtyBtn onClick={handleSubtract}>-</QtyBtn><span>{quantity}</span><QtyBtn onClick={handleAdd}>+</QtyBtn>
                </Quantity>
                <CartBtnAdd onClick={handleClick}>Add to Cart</CartBtnAdd>
            </Cart>

        </MenuItemContainer>


    )
}

export default MenuItemCard
