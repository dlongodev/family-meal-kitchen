import axios from 'axios'
import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { ButtonSolid } from '../../styles/Button.styled'
import { CloseBtn, FormGroup, ModalContainer, ModalTitle, ModalWrapper, OrderForm, OrderInput, OrderInputLabel, OrderTextArea, RadioChoices } from '../../styles/OrderDetail.styled'
import { Paragraph, Wrapper } from '../../styles/Utils.styled'

const AdminMenuEdit = ({ menuItem }) => {

    const [formData, setFormData] = useState({
        title: menuItem.title,
        desc: menuItem.desc,
        price: menuItem.price,
        category: menuItem.category
    })

    const handleSubmit = (e) => {
        // e.preventDefault()
        // createOrder(formData)
    }


    return (

        <Wrapper mqFlex="column">
            <ModalTitle>Edit Menu Item</ModalTitle>
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
                        <OrderInput id='poultry' type="radio" name="method" value="poultry" checked={"poultry" === formData.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='poultry'>Poultry</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='beef' type="radio" name="method" value="beef" checked={"beef" === formData.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='beef'>Beef & Pork</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='pasta' type="radio" name="method" value="pasta" checked={"pasta" === formData.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='pasta'>Pasta & More</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='shrimp' type="radio" name="method" value="shrimp" checked={"shrimp" === formData.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='shrimp'>Shrimp Our Way</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='salad' type="radio" name="method" value="salad" checked={"salad" === formData.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='salad'>Simple Salads</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='sides' type="radio" name="method" value="sides" checked={"sides" === formData.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='sides'>Family Size Sides</OrderInputLabel>
                    </div>
                    <div>
                        <OrderInput id='quart' type="radio" name="method" value="quart" checked={"quart" === formData.category} onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
                        <OrderInputLabel htmlFor='quart'>Dressing or Sauces by the Quart</OrderInputLabel>
                    </div>
                </RadioChoices>
                <ButtonSolid m="1rem 0 0 0" type='submit'>Update Menu Item</ButtonSolid>
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