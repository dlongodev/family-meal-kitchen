import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BtnLinkOutlined, ButtonSolid } from '../../../styles/Button.styled'
import { Form, Input, InputLabel, TextArea, RadioChoices } from '../../../styles/Form.styled'
import { FlexDiv, TitleText, Wrapper } from '../../../styles/Utils.styled'

const Add = ({ categoryList }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: "",
        desc: "",
        price: "",
        category: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`/api/menu`, formData);
            router.push("/admin?tab=3");
        } catch (err) {
            console.log("Error Creating New Menu Item", err);
        }
    }

    return (
        <Wrapper mqFlex="column">
            <TitleText>Add New Menu Item</TitleText>
            <Form onSubmit={handleSubmit}>
                <InputLabel htmlFor='title'>Title:</InputLabel>
                <Input required id='title' name='title' type="text" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                <InputLabel htmlFor='desc'>Description:</InputLabel>
                <TextArea rows={4} id='desc' name='desc' type="text" onChange={(e) => setFormData({ ...formData, desc: e.target.value })} />
                <InputLabel htmlFor='price'>Price: </InputLabel>
                <Input required id='price' name='price' type="text" onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                <RadioChoices>
                    <legend>Category:</legend>
                    {categoryList?.map(category => (
                        <div key={category._id}>
                            <Input id={category.slug} type="radio" name="category" value={category.slug} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                            <InputLabel htmlFor={category.slug}>{category.title}</InputLabel>
                        </div>
                    ))}
                </RadioChoices>
                <FlexDiv justify="space-between">
                    <ButtonSolid m="0" type='submit'>Add Menu Item</ButtonSolid>
                    <Link href="/admin?tab=3" passHref>
                        <BtnLinkOutlined>Back to Admin Panel</BtnLinkOutlined>
                    </Link>
                </FlexDiv>
            </Form>
        </Wrapper>

    )
}

export default Add

export const getServerSideProps = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_PROTOCOL}${process.env.VERCEL_URL}/api/category`)
    return {
        props: {
            categoryList: res.data,
        },
    }
}