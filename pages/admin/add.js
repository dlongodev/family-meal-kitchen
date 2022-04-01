import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BtnLinkOutlined, ButtonSolid } from '../../styles/Button.styled'
import { OrderForm, OrderInput, OrderInputLabel, OrderTextArea, RadioChoices } from '../../styles/OrderDetail.styled'
import { FlexDiv, TitleText, Wrapper } from '../../styles/Utils.styled'

const Add = ({ menuItem }) => {
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
            await axios.post(`${process.env.BASE_URL}/api/menu`, formData);
            router.push("/admin?tab=3");
        } catch (err) {
            console.log("Error Creating New Menu Item", err);
        }
    }

    return (
        <Wrapper mqFlex="column">
            <TitleText>Add New Menu Item</TitleText>
            <OrderForm onSubmit={handleSubmit}>
                <OrderInputLabel htmlFor='title'>Title:</OrderInputLabel>
                <OrderInput required id='title' name='title' type="text" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                <OrderInputLabel htmlFor='desc'>Description:</OrderInputLabel>
                <OrderTextArea rows={4} id='desc' name='desc' type="text" onChange={(e) => setFormData({ ...formData, desc: e.target.value })} />
                <OrderInputLabel htmlFor='price'>Price: </OrderInputLabel>
                <OrderInput required id='price' name='price' type="text" onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                <RadioChoices>
                    <legend>Category:</legend>
                    <div>
                        <OrderInput id='poultry' type="radio" name="category" value="poultry" onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='poultry'>Poultry</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='beef' type="radio" name="category" value="beef" onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='beef'>Beef & Pork</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='pasta' type="radio" name="category" value="pasta" onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='pasta'>Pasta & More</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='shrimp' type="radio" name="category" value="shrimp" onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='shrimp'>Shrimp Our Way</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='salad' type="radio" name="category" value="salad" onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='salad'>Simple Salads</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='sides' type="radio" name="category" value="sides" onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='sides'>Family Size Sides</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='quart' type="radio" name="category" value="quart" onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                        <OrderInputLabel htmlFor='quart'>Dressing or Sauces by the Quart</OrderInputLabel>
                    </div>
                </RadioChoices>
                <FlexDiv justify="space-between">
                    <ButtonSolid m="0" type='submit'>Add Menu Item</ButtonSolid>
                    <Link href="/admin?tab=3" passHref>
                        <BtnLinkOutlined>Back to Admin Panel</BtnLinkOutlined>
                    </Link>
                </FlexDiv>
            </OrderForm>
        </Wrapper>

    )
}

export default Add