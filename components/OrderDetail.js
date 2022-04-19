import React from 'react'
import { useState } from 'react'
import { BtnLinkOutlined, ButtonSolid } from '../styles/Button.styled'
import { FormGroup, FormTitle, Form, Input, InputLabel, TextArea, RadioChoices } from '../styles/Form.styled'
// import { GrClose } from 'react-icons/gr'
import { FlexDiv, Paragraph } from '../styles/Utils.styled'
import Link from 'next/link'

const OrderDetail = ({ total, createOrder, setCheckout }) => {
  const [formData, setFormData] = useState({
    customer: "",
    email: "",
    phone: "",
    address: "",
    cityStateZip: "",
    deliveryDate: "",
    deliveryTime: "",
    total: total,
    method: "",
    instructions: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createOrder(formData)
  }

  return (
    <>
      <FlexDiv flex="column" m="0">
        <FormTitle>
          Contact & Delivery Details
        </FormTitle>
        <Paragraph m="0">Order Total: ${total}</Paragraph>
        <Form onSubmit={handleSubmit}>
          <InputLabel htmlFor='customer'>Name: </InputLabel>
          <Input required id='customer' name='customer' placeholder='John Doe' type="text" onChange={(e) => setFormData({ ...formData, customer: e.target.value })} />
          <FormGroup>
            <fieldset>
              <InputLabel htmlFor='email'>Email: </InputLabel>
              <Input required id='email' name='email' placeholder='john@email.com' type="text" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </fieldset>
            <fieldset>
              <InputLabel htmlFor='phone'>Phone Number:</InputLabel>
              <Input required id='phone' name='phone' placeholder='772-555-5555' type="text" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </fieldset>
          </FormGroup>
          <FormGroup>
            <fieldset>
              <InputLabel htmlFor='address'>Address: </InputLabel>
              <Input required id='address' name='address' placeholder='123 Main Street' type="text" onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            </fieldset>
            <fieldset>
              <InputLabel htmlFor='cityStateZip'>City, State, Zip </InputLabel>
              <Input required id='cityStateZip' name='cityStateZip' placeholder='Hobe Sound, FL 33455' type="text" onChange={(e) => setFormData({ ...formData, cityStateZip: e.target.value })} />
            </fieldset>
          </FormGroup>
          <FormGroup>
            <fieldset>
              <InputLabel htmlFor='deliveryDate'>Delivery Date: </InputLabel>
              <Input required id='deliveryDate' name='deliveryDate' type="date" onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })} />
            </fieldset>
            <fieldset>
              <InputLabel htmlFor='deliveryTime'>Time: </InputLabel>
              <Input required id='deliveryTime' name='deliveryTime' type="time" onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })} />
            </fieldset>
          </FormGroup>
          <RadioChoices>
            <legend>Payment Method Choice:</legend>
            <div>
              <Input id='zelle' type="radio" name="method" value="zelle" onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
              <InputLabel htmlFor='zelle'>Zelle</InputLabel>
            </div>
            <div>
              <Input id='venmo' type="radio" name="method" value="venmo" onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
              <InputLabel htmlFor='venmo'>Venmo</InputLabel>
            </div>
            <div>
              <Input id='cash' type="radio" name="method" value="cash" onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
              <InputLabel htmlFor='cash'>Cash</InputLabel>
            </div>
          </RadioChoices>
          <InputLabel htmlFor='instructions'>Special Instructions:</InputLabel>
          <TextArea rows={4} id='instructions' name='instructions' placeholder='Add any special instructions here' type="text" onChange={(e) => setFormData({ ...formData, instructions: e.target.value })} />
          <FlexDiv justify='space-between'>
            <ButtonSolid m="1rem 0 0 0" w="inherit" type='submit'>Place Order</ButtonSolid>
            <Link href="/menu" passHref>
              <BtnLinkOutlined m="1rem 0 0 0" w="inherit">Add More Items</BtnLinkOutlined>
            </Link>
          </FlexDiv>
        </Form>
      </FlexDiv>
    </>
  )
}

export default OrderDetail