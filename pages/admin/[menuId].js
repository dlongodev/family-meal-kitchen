import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BtnLinkOutlined, ButtonSolid } from '../../styles/Button.styled'
import { Form, Input, InputLabel, TextArea, RadioChoices } from '../../styles/Form.styled'
import { FlexDiv, TitleText, Wrapper } from '../../styles/Utils.styled'

const AdminMenuEdit = ({ menuItem, categoryList }) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: menuItem.title,
        desc: menuItem.desc,
        price: menuItem.price,
        category: menuItem.category
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${process.env.BASE_URL}/api/menu/${menuItem._id}`, formData);
            router.push("/admin?tab=3");
        } catch (err) {
            console.log("Error Updating Menu Item", err);
        }
    }

    return (

        <Wrapper mqFlex="column">
            <TitleText>Edit Menu Item</TitleText>
            <Form onSubmit={handleSubmit}>
                <InputLabel htmlFor='title'>Title:</InputLabel>
                <Input required id='title' name='title' type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                <InputLabel htmlFor='desc'>Description:</InputLabel>
                <TextArea rows={4} id='desc' name='desc' type="text" value={formData.desc} onChange={(e) => setFormData({ ...formData, desc: e.target.value })} />
                <InputLabel htmlFor='price'>Price: </InputLabel>
                <Input required id='price' name='price' type="text" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                <RadioChoices>
                    <legend>Category:</legend>
                    {categoryList?.map(category => (
                        <div key={category._id}>
                            <Input id={category.slug} type="radio" name="category" value={category.slug} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                            <InputLabel htmlFor={category.slug}>{category.categoryTitle}</InputLabel>
                        </div>
                    ))}
                </RadioChoices>
                <FlexDiv justify="space-between">
                    <ButtonSolid m="0" type='submit'>Edit Menu Item</ButtonSolid>
                    <Link href="/admin?tab=3" passHref>
                        <BtnLinkOutlined>Back to Admin Panel</BtnLinkOutlined>
                    </Link>
                </FlexDiv>
            </Form>
        </Wrapper>

    )
}


export const getServerSideProps = async ({ params }) => {
    const [resParams, resCategory] = await Promise.all([
        axios.get(`${process.env.BASE_URL}/api/menu/${params.menuId}`),
        axios.get(`${process.env.BASE_URL}/api/category`)

    ])
    return {
        props: {
            menuItem: resParams.data,
            categoryList: resCategory.data,
        },
    };
};

export default AdminMenuEdit