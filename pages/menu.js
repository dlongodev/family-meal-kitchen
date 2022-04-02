import Image from 'next/image'
import { Paragraph, TitleText, Wrapper, PanContainer, Pans } from '../styles/Utils.styled'
import { panImages } from '../data/images'
import MenuItemCard from '../components/MenuItemCard'
import { Grid, MenuTitle } from '../styles/menu.styled'
import axios from 'axios'

const Menu = ({ menuList }) => {

    return (
        <>
            <Wrapper mqFlex="column" >
                <TitleText>Order by the Pan Menu </TitleText>
                <Paragraph align="center" m="0" >One Pan Feeds 6 to 8 People.
                    Chef Joe has counteless other dishes and ethnic cuisines and we will make any special request! Orders will only be accepted 24hour prior to delivery day. Please call us for any special request at <span>754-264-6268</span>
                </Paragraph>
            </Wrapper>
            <div style={{ position: "relative" }}>
                <PanContainer>
                    <Image src="/img/pans-header.png" width={1000} height={200} alt='' />
                </PanContainer>
                <Wrapper bg="var(--light-100)" mqFlex="column" w="100%" m="0" style={{ zIndex: 2, position: "relative", boxShadow: "var(--shadowTop)" }}>
                    <Grid>
                        <div>
                            <MenuTitle>Poultry</MenuTitle>
                            {menuList.map((item) => (
                                item.category === "poultry"
                                && < MenuItemCard menuItem={item} key={item._id} />
                            ))}
                        </div>
                        <div>
                            <MenuTitle>Beef & Pork</MenuTitle>
                            {menuList.map((item) => (
                                item.category === "beef"
                                && < MenuItemCard menuItem={item} key={item._id} />
                            ))}
                        </div>
                    </Grid>


                </Wrapper>
            </div>
        </>
    )
}

export default Menu

export const getServerSideProps = async () => {
    const res = await axios.get(`${process.env.BASE_URL}/api/menu`)
    return {
        props: {
            menuList: res.data,
        },
    }
}