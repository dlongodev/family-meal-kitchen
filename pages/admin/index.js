import Tabs from "../../components/Tabs"
import { Paragraph, TitleText } from "../../styles/Utils.styled"
import axios from "axios"

const Admin = ({ orders, menu, categories }) => {
    return (
        <>
            <TitleText m="2rem 0 0 0">Admin Dashboard</TitleText>
            <Paragraph align="center" m="0">Welcome, Chef Joe Longo</Paragraph>
            <Tabs orders={orders} menu={menu} categories={categories} />
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || ""
    if (myCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: "/admin/login",
                permanent: false,
            }
        }
    }
    const [menuRes, orderRes, catRes] = await Promise.all([
        axios.get(`${process.env.BASE_URL}/api/menu`),
        axios.get(`${process.env.BASE_URL}/api/orders`),
        axios.get(`${process.env.BASE_URL}/api/category`)
    ]);
    return {
        props: {
            menu: menuRes.data,
            orders: orderRes.data,
            categories: catRes.data,
        },
    };
};

export default Admin

