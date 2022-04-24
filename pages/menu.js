import Image from 'next/image'
import { Paragraph, TitleText, Wrapper, PanContainer } from '../styles/Utils.styled'
import { GridSection } from '../styles/menu.styled'
import axios from 'axios'
import MenuSection from '../components/MenuSection'


const Menu = ({ menuList, categories }) => {

    return (
        <>
            <Wrapper mqFlex="column" >
                <TitleText>Order by the Pan Menu </TitleText>
                <Paragraph align="center" m="0" >All of our pans serve 6 to 8 people.Half pans available on request. Free delivery throughout Martin County and $100 minimum order for delivery to Palm Beach and St.Lucie Counties. Orders must be placed at least a day prior to delivery. Please call us for any special request at <span>754-264-6268</span>
                </Paragraph>
            </Wrapper>
            <div style={{ position: "relative" }}>
                <PanContainer>
                    <Image src="/img/pans-header.png" width={1000} height={200} alt='' />
                </PanContainer>
                <Wrapper bg="var(--light-100)" mqFlex="column" w="100%" m="0" style={{ zIndex: 2, position: "relative", boxShadow: "var(--shadowTop)" }}>
                    <GridSection>
                        {categories?.map(category => (
                            <MenuSection key={category._id} menuList={menuList} category={category} />
                        ))}
                    </GridSection>
                </Wrapper>
            </div>
        </>
    )
}

export default Menu

export const getServerSideProps = async () => {
    const [menuRes, catRes] = await Promise.all([
        axios.get(`${process.env.BASE_URL}/api/menu`),
        axios.get(`${process.env.BASE_URL}/api/category`)
    ]);
    if (!menuRes || !catRes) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            menuList: menuRes.data,
            categories: catRes.data,
        },
    };
}