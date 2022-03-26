import React, { useEffect, useState } from 'react'
import { MenuItemContainer, ItemTitle, ItemPrice, ItemDesc, Cart, Quantity, CartBtnAdd } from '../styles/MenuItemCard.styled'
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addMenuItem } from '../redux/cartSlice'

const MenuItemCard = ({ menuItem }) => {
    // const [itemAdded, setItemAdded] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(menuItem.price)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addMenuItem({ ...menuItem, quantity, price }))
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }

    // const handleAddquantity = () => {
    //     setQty(qty + 1)
    // }
    // const handleSubQty = () => {
    //     if (qty > 0) {
    //         setQty(qty - 1)
    //     }
    // }

    // useEffect(() => {
    //     if (qty > 0) {
    //         setItemAdded(true)
    //     }
    // }, [qty])

    return (
        <MenuItemContainer tabIndex={0}>
            <ItemTitle>{menuItem.title} <ItemPrice>${menuItem.price}</ItemPrice></ItemTitle>
            <ItemDesc>{menuItem.desc}</ItemDesc>
            <Cart>
                <Quantity type="number" min="0" max="10" step="1" value={quantity} onChange={handleQuantity} />
                <CartBtnAdd onClick={handleClick}>Add to Cart</CartBtnAdd>
            </Cart>

        </MenuItemContainer>


    )
}

export default MenuItemCard

// export const getServerSideProps = async ({ params }) => {
//     const res = await axios.get(`http://localhost:3000/api/menu/${params.id}`)
//     return {
//         props: {
//             menuItem: res.data,
//         },
//     }
// }