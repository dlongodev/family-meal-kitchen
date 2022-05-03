import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BtnLinkOutlined, ButtonSolid } from '../../../styles/Button.styled'
import { Form, Input, InputLabel } from '../../../styles/Form.styled'
import { FlexDiv, TitleText, Wrapper } from '../../../styles/Utils.styled'


const AdminCategoryEdit = ({ category }) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: category.title,
        slug: category.slug,
        order: category.order
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`/api/category/${category._id}`, formData);
            router.push("/admin?tab=4");
        } catch (err) {
            console.log("Error Updating Category", err);
        }
    }

    return (

        <Wrapper mqFlex="column">
            <TitleText>Edit Category</TitleText>
            <Form onSubmit={handleSubmit}>
                <InputLabel htmlFor='title'>Title:</InputLabel>
                <Input required id='title' name='title' type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                <InputLabel htmlFor='slug'>Slug:</InputLabel>
                <Input id='slug' name='slug' type="text" value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} />
                <InputLabel htmlFor='order'>Order: </InputLabel>
                <Input required id='order' name='order' type="number" value={formData.order} onChange={(e) => setFormData({ ...formData, order: e.target.value })} />
                <FlexDiv justify="space-between">
                    <ButtonSolid m="0" type='submit'>Edit Category</ButtonSolid>
                    <Link href="/admin?tab=4" passHref>
                        <BtnLinkOutlined>Back to Admin Panel</BtnLinkOutlined>
                    </Link>
                </FlexDiv>
            </Form>
        </Wrapper>

    )
}


export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`${process.env.PUBLIC_NEXT_VERCEL_URL}/api/category/${params.catId}`)
    return {
        props: { category: res.data },
    };
};

export default AdminCategoryEdit 