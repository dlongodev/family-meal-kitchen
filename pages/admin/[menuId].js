import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BtnLinkOutlined, ButtonSolid } from '../../styles/Button.styled'
import { Form, Input, InputLabel, TextArea, RadioChoices } from '../../styles/Form.styled'
import { FlexDiv, TitleText, Wrapper } from '../../styles/Utils.styled'

const AdminMenuEdit = ({ menuItem }) => {
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
                    <div>
                        <Input id='poultry' type="radio" name="category" value="poultry" checked={"poultry" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <InputLabel htmlFor='poultry'>Poultry</InputLabel>
                    </div>
                    <div>
                        <Input id='beef' type="radio" name="category" value="beef" checked={"beef" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <InputLabel htmlFor='beef'>Beef & Pork</InputLabel>
                    </div>
                    <div>
                        <Input id='pasta' type="radio" name="category" value="pasta" checked={"pasta" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <InputLabel htmlFor='pasta'>Pasta & More</InputLabel>
                    </div>
                    <div>
                        <Input id='shrimp' type="radio" name="category" value="shrimp" checked={"shrimp" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <InputLabel htmlFor='shrimp'>Shrimp Our Way</InputLabel>
                    </div>
                    <div>
                        <Input id='salad' type="radio" name="category" value="salad" checked={"salad" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <InputLabel htmlFor='salad'>Simple Salads</InputLabel>
                    </div>
                    <div>
                        <Input id='sides' type="radio" name="category" value="sides" checked={"sides" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <InputLabel htmlFor='sides'>Family Size Sides</InputLabel>
                    </div>
                    <div>
                        <Input id='quart' type="radio" name="category" value="quart" checked={"quart" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <InputLabel htmlFor='quart'>Dressing or Sauces by the Quart</InputLabel>
                    </div>
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
    const res = await axios.get(`${process.env.BASE_URL}/api/menu/${params.menuId}`)
    return {
        props: { menuItem: res.data },
    };
};

export default AdminMenuEdit