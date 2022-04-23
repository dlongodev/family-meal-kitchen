import { Paragraph, TitleText, Wrapper, PanContainer } from '../styles/Utils.styled'
import { Grid, MenuTitle } from '../styles/menu.styled'
import MenuItemCard from '../components/MenuItemCard'

import React from 'react'

const MenuSection = ({ menuList, category }) => {
    return (
        <>
            <div>
                <MenuTitle>
                    {category.categoryTitle}
                </MenuTitle>
                <Grid>
                    {menuList?.map((item) => (
                        item.category === category.slug
                        && < MenuItemCard menuItem={item} key={item._id} />
                    ))}
                </Grid>
            </div>
        </>
    )
}

export default MenuSection