import React, { useState } from 'react'
import { MenuItemContainer, ItemTitle, ItemPrice, ItemDesc, Cart, CartBtnAdd } from '../styles/MenuItemCard.styled'


const MenuItemCard = ({ menuItem }) => {

    return (
        <MenuItemContainer tabIndex={0}>
            <ItemTitle>{menuItem.title} <ItemPrice>${menuItem.price}</ItemPrice></ItemTitle>
            <ItemDesc>{menuItem.desc}</ItemDesc>
            <Cart>
                <CartBtnAdd className="snipcart-add-item"
                    data-item-id={menuItem._id}
                    data-item-price={menuItem.price}
                    data-item-url="/menu"
                    data-item-name={menuItem.title}
                >Add to Cart</CartBtnAdd>
            </Cart>
        </MenuItemContainer>
    )
}

export default MenuItemCard
