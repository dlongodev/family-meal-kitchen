import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BtnLinkOutlined, ButtonSolid } from '../../styles/Button.styled'
import { OrderForm, OrderInput, OrderInputLabel, OrderTextArea, RadioChoices } from '../../styles/OrderDetail.styled'
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
            <OrderForm onSubmit={handleSubmit}>
                <OrderInputLabel htmlFor='title'>Title:</OrderInputLabel>
                <OrderInput required id='title' name='title' type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                <OrderInputLabel htmlFor='desc'>Description:</OrderInputLabel>
                <OrderTextArea rows={4} id='desc' name='desc' type="text" value={formData.desc} onChange={(e) => setFormData({ ...formData, desc: e.target.value })} />
                <OrderInputLabel htmlFor='price'>Price: </OrderInputLabel>
                <OrderInput required id='price' name='price' type="text" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                <RadioChoices>
                    <legend>Category:</legend>
                    <div>
                        <OrderInput id='poultry' type="radio" name="category" value="poultry" checked={"poultry" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='poultry'>Poultry</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='beef' type="radio" name="category" value="beef" checked={"beef" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='beef'>Beef & Pork</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='pasta' type="radio" name="category" value="pasta" checked={"pasta" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='pasta'>Pasta & More</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='shrimp' type="radio" name="category" value="shrimp" checked={"shrimp" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='shrimp'>Shrimp Our Way</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='salad' type="radio" name="category" value="salad" checked={"salad" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='salad'>Simple Salads</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='sides' type="radio" name="category" value="sides" checked={"sides" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='sides'>Family Size Sides</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='quart' type="radio" name="category" value="quart" checked={"quart" === formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='quart'>Dressing or Sauces by the Quart</OrderInputLabel>
                    </div>
                </RadioChoices>
                <FlexDiv justify="space-between">
                    <ButtonSolid m="0" type='submit'>Edit Menu Item</ButtonSolid>
                    <Link href="/admin?tab=3" passHref>
                        <BtnLinkOutlined>Back to Admin Panel</BtnLinkOutlined>
                    </Link>
                </FlexDiv>
            </OrderForm>
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