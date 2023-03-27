import React, { useState } from 'react'
import { MenuItemContainer, ItemTitle, ItemPrice, ItemDesc, Cart, Quantity, CartBtnAdd } from '../styles/MenuItemCard.styled'
import { useDispatch } from 'react-redux'
import { addMenuItem } from '../redux/cartSlice'

const MenuItemCard = ({ menuItem }) => {
    // const [itemAdded, setItemAdded] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(menuItem.price)
    const dispatch = useDispatch()

    const handleAddItem = () => {
        dispatch(addMenuItem({ ...menuItem, quantity, price }))
    }

    const handleQuantity = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    return (
        <MenuItemContainer tabIndex={0}>
            <ItemTitle>{menuItem.title} <ItemPrice>${menuItem.price}</ItemPrice></ItemTitle>
            <ItemDesc>{menuItem.desc}</ItemDesc>
            <Cart>
                <Quantity type="number" min="0" max="10" step="1" value={quantity} onChange={handleQuantity} />
                <CartBtnAdd onClick={handleAddItem}>Add to Cart</CartBtnAdd>
            </Cart>

        </MenuItemContainer>


    )
}

export default MenuItemCard
