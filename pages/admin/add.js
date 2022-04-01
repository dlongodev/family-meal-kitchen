import axios from 'axios'
import { Router } from 'next/router'
import React, { useState } from 'react'
import { ButtonSolid } from '../../styles/Button.styled'
import { ModalTitle, OrderForm, OrderInput, OrderInputLabel, OrderTextArea, RadioChoices } from '../../styles/OrderDetail.styled'
import { Wrapper } from '../../styles/Utils.styled'

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
            router.push("/admin");
        } catch (err) {
            console.log("Error Creating New Menu Item", err);
        }
        setFormData({
            title: "",
            desc: "",
            price: "",
            category: ""
        })
    }

    return (
        <Wrapper mqFlex="column">
            <ModalTitle>Edit Menu Item</ModalTitle>
            <OrderForm onSubmit={handleSubmit}>
                <OrderInputLabel htmlFor='title'>Title:</OrderInputLabel>
                <OrderInput required id='title' name='title' type="text" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                <OrderInputLabel htmlFor='desc'>Description:</OrderInputLabel>
                <OrderTextArea rows={4} id='desc' name='desc' type="text" onChange={(e) => setFormData({ ...formData, desc: e.target.value })} />
                <OrderInputLabel htmlFor='price'>Price: </OrderInputLabel>
                <OrderInput required id='price' name='price' placeholder='123 Main Street' type="text" onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                <RadioChoices>
                    <legend>Category:</legend>
                    <div>
                        <OrderInput id='poultry' type="radio" name="method" value="poultry" checked={"poultry" === menuItem.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='poultry'>Poultry</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='beef' type="radio" name="method" value="beef" checked={"beef" === menuItem.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='beef'>Beef & Pork</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='pasta' type="radio" name="method" value="pasta" checked={"pasta" === menuItem.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='pasta'>Pasta & More</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='shrimp' type="radio" name="method" value="shrimp" checked={"shrimp" === menuItem.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='shrimp'>Shrimp Our Way</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='salad' type="radio" name="method" value="salad" checked={"salad" === menuItem.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='salad'>Simple Salads</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='sides' type="radio" name="method" value="sides" checked={"sides" === menuItem.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='sides'>Family Size Sides</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='quart' type="radio" name="method" value="quart" checked={"quart" === menuItem.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='quart'>Dressing or Sauces by the Quart</OrderInputLabel>
                    </div>
                </RadioChoices>
                <ButtonSolid m="1rem 0 0 0" type='submit'>Update Menu Item</ButtonSolid>
            </OrderForm>
        </Wrapper>

    )
}

export default Add