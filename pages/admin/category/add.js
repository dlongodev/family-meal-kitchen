import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BtnLinkOutlined, ButtonSolid } from '../../../styles/Button.styled'
import { Form, Input, InputLabel } from '../../../styles/Form.styled'
import { FlexDiv, TitleText, Wrapper } from '../../../styles/Utils.styled'

const AddCategory = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        order: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`/api/category`, formData);
            router.push("/admin?tab=4");
        } catch (err) {
            console.log("Error Creating New Category", err);
        }
    }

    return (
        <Wrapper mqFlex="column">
            <TitleText>Add New Category</TitleText>
            <Form onSubmit={handleSubmit}>
                <InputLabel htmlFor='title'>Title:</InputLabel>
                <Input required id='title' name='title' type="text" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                <InputLabel htmlFor='slug'>Slug:</InputLabel>
                <Input id='slug' name='slug' type="text" onChange={(e) => setFormData({ ...formData, slug: e.target.value })} />
                <InputLabel htmlFor='order'>Order: </InputLabel>
                <Input required id='order' name='order' type="number" onChange={(e) => setFormData({ ...formData, order: e.target.value })} />
                <FlexDiv justify="space-between">
                    <ButtonSolid m="0" type='submit'>Add Category</ButtonSolid>
                    <Link href="/admin?tab=4" passHref>
                        <BtnLinkOutlined>Back to Admin Panel</BtnLinkOutlined>
                    </Link>
                </FlexDiv>
            </Form>
        </Wrapper>

    )
}

export default AddCategory
