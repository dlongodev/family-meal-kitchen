
import { Grid, GridSection, MenuTitle } from '../styles/menu.styled'
import MenuItemCard from '../components/MenuItemCard'

import React from 'react'

const MenuSection = ({ menuList, categories }) => {

    return (
        <>
            {categories?.map(category => (
                <GridSection key={category._id}>
                <MenuTitle>
                    {category.categoryTitle}
                </MenuTitle>
                <Grid>
                    {menuList?.map((item) => (
                        item.category === category.slug
                        && < MenuItemCard menuItem={item} key={item._id} />
                    ))}
                </Grid>
                </GridSection>
            ))}
        </>
    )
}

export default MenuSection

// export const getStaticProps = async () => {
//     const catRes = await axios.get(`${process.env.BASE_URL}/api/category`)
//     const menuRes = await axios.get(`${process.env.BASE_URL}/api/menu`)

//     return {
//         props: {
//             menuList: menuRes.data,
//             categories: catRes.data,
//         },
//     };
// }