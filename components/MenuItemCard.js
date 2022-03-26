import React, { useEffect, useState } from 'react'
import { MenuItemContainer, ItemTitle, ItemPrice, ItemDesc, Cart, Quantity, CartBtnAdd } from '../styles/MenuItemCard.styled'
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import axios from 'axios'


const MenuItemCard = ({ title, desc, price, menuItem }) => {
    const [itemAdded, setItemAdded] = useState(false)
    const [qty, setQty] = useState(0)

    // const handleAddQty = () => {
    //     setQty(qty + 1)
    // }
    // const handleSubQty = () => {
    //     if (qty > 0) {
    //         setQty(qty - 1)
    //     }
    // }

    useEffect(() => {
        if (qty > 0) {
            setItemAdded(true)
        }
    }, [qty])

    return (
        <MenuItemContainer tabIndex={0}>
            <ItemTitle>{title} <ItemPrice>${price}</ItemPrice></ItemTitle>
            <ItemDesc>{desc}</ItemDesc>
            <Cart>
                <Quantity type="number" min="0" max="10" step="1" value={qty} onChange={(e) => setQty(e.target.value)} />
                <CartBtnAdd>Add to Cart</CartBtnAdd>
            </Cart>

        </MenuItemContainer>


    )
}

export default MenuItemCard

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/menu/${params.id}`)
    return {
        props: {
            menuItem: res.data,
        },
    }
}