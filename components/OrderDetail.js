import React from 'react'
import { useState } from 'react'
import { ButtonSolid } from '../styles/Button.styled'
import { CloseBtn, FormGroup, ModalContainer, ModalTitle, ModalWrapper, OrderForm, OrderInput, OrderInputLabel, OrderTextArea, RadioChoices } from '../styles/OrderDetail.styled'
import { GrClose } from 'react-icons/gr'
import { Paragraph } from '../styles/Utils.styled'

const OrderDetail = ({ total, createOrder, setCheckout }) => {
  const [formData, setFormData] = useState({
    customer: "",
    address: "",
    cityStateZip: "",
    phone: "",
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
    <ModalContainer>
      <ModalWrapper>
        <CloseBtn onClick={() => setCheckout(false)}>
          <GrClose />
        </CloseBtn>
        <ModalTitle>
          Contact & Delivery Details
        </ModalTitle>
        <Paragraph m="0">Order Total: ${total}</Paragraph>
        <OrderForm onSubmit={handleSubmit}>
          <OrderInputLabel htmlFor='customer'>Name: </OrderInputLabel>
          <OrderInput required id='customer' name='customer' placeholder='John Doe' type="text" onChange={(e) => setFormData({ ...formData, customer: e.target.value })} />
          <OrderInputLabel htmlFor='address'>Address: </OrderInputLabel>
          <OrderInput required id='address' name='address' placeholder='123 Main Street' type="text" onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
          <OrderInputLabel htmlFor='cityStateZip'>City, State, Zip </OrderInputLabel>
          <OrderInput required id='cityStateZip' name='cityStateZip' placeholder='Hobe Sound, FL 33455' type="text" onChange={(e) => setFormData({ ...formData, cityStateZip: e.target.value })} />
          <OrderInputLabel htmlFor='phone'>Phone Number:</OrderInputLabel>
          <OrderInput required id='phone' name='phone' placeholder='772-555-5555' type="text" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          <FormGroup>
            <fieldset>
              <OrderInputLabel htmlFor='deliveryDate'>Delivery Date: </OrderInputLabel>
              <OrderInput required id='deliveryDate' name='deliveryDate' type="date" onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })} />
            </fieldset>
            <fieldset>
              <OrderInputLabel htmlFor='deliveryTime'>Time: </OrderInputLabel>
              <OrderInput required id='deliveryTime' name='deliveryTime' type="time" onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })} />
            </fieldset>
          </FormGroup>
          <RadioChoices>
            <legend>Payment Method Choice:</legend>
            <div>
              <OrderInput id='zelle' type="radio" name="method" value="zelle" onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
              <OrderInputLabel htmlFor='zelle'>Zelle</OrderInputLabel>
            </div>
            <div>
              <OrderInput id='venmo' type="radio" name="method" value="venmo" onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
              <OrderInputLabel htmlFor='venmo'>Venmo</OrderInputLabel>
            </div>
            <div>
              <OrderInput id='cash' type="radio" name="method" value="cash" onChange={(e) => setFormData({ ...formData, method: e.target.value })} />
              <OrderInputLabel htmlFor='cash'>Cash</OrderInputLabel>
            </div>
          </RadioChoices>
          <OrderInputLabel htmlFor='instructions'>Special Instructions:</OrderInputLabel>
          <OrderTextArea rows={4} id='instructions' name='instructions' placeholder='Add any special instructions here' type="text" onChange={(e) => setFormData({ ...formData, instructions: e.target.value })} />
          <ButtonSolid m="1rem 0 0 0" type='submit'>Submit</ButtonSolid>
        </OrderForm>

      </ModalWrapper>
    </ModalContainer>
  )
}

export default OrderDetail