import { AdminContainer, TabHead, TabContainer, TabBody, Tab } from "../../styles/Admin.styled"
import Tabs from "../../components/Tabs"
import { Paragraph, TitleText } from "../../styles/Utils.styled"
import axios from "axios"
import { useState } from "react"

const Admin = ({ orders, menu }) => {
    const [orderDone, setOrderDone] = useState(false)

    const handleOrderDone = () => {
        // edit backend Order done from false to true
        setOrderDone(true)
    }



    return (
        <>
            <TitleText m="2rem 0 0 0">Admin Panel</TitleText>
            <Paragraph align="center" m="0">Welcome, Chef Joe Longo</Paragraph>
            <Tabs orders={orders} menu={menu} handleOrderDone={handleOrderDone} />
        </>
    )
}

export const getServerSideProps = async () => {
    const [menuRes, orderRes] = await Promise.all([
        axios.get(`${process.env.APP_DOMAIN}/api/menu`),
        axios.get(`${process.env.APP_DOMAIN}/api/orders`)
    ]);
    return {
        props: {
            menu: menuRes.data,
            orders: orderRes.data,
        },
    };
};

export default Admin

