import {
  Quantity,
  QtyBtn,
  ButtonDelete,
  CartTotalText,
  CartTotalWrapper,
  GridTable,
  SectionContainer,
} from "../styles/cart.styled";
import styled from "styled-components";
import { FlexDiv, Paragraph, TitleText, Wrapper } from "../styles/Utils.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import OrderDetail from "../components/OrderDetail";
import Link from "next/link";
import { BtnLinkOutlined, ButtonSolid } from "../styles/Button.styled";

const Cart = () => {
  const [checkout, setCheckout] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const createOrder = async (data) => {
    try {
      const res = await axios.post(`/api/orders`, data);
      if (res.status === 201) {
        await router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log("Error with CreateOrder function", err);
    }
  };

  const handleDelete = (item) => {
    console.log(item);
  };

  const handleSubtract = () => {};

  return (
    <>
      <Wrapper mqFlex="column">
        <Paragraph align="center" m="2rem 1rem 0 1rem">
          Orders will only be accepted 24hour prior to delivery day. Please call
          us for any special request at <span>754-264-6268</span>
        </Paragraph>
      </Wrapper>
      <SectionContainer>
        {checkout ? (
          <OrderDetail
            total={cart.total}
            createOrder={createOrder}
            setCheckout={setCheckout}
          />
        ) : (
          <FlexDiv flex="column">
            {cartEmpty ? (
              <FlexDiv flex="column">
                <TitleText m="1rem" fw="300">
                  Your Cart is Empty
                </TitleText>
                <Link href="/menu" passHref>
                  <BtnLinkOutlined m="1rem 0 0 0" w="15rem">
                    Add Items to Cart
                  </BtnLinkOutlined>
                </Link>
              </FlexDiv>
            ) : (
              <FlexDiv flex="column">
                <TitleText m="1rem" fw="300">
                  Your Order
                </TitleText>
                {cart?.menuItems.map((item, i) => (
                  <GridTable key={i}>
                    <div>{item.title}</div>
                    <Quantity>
                      <QtyBtn onClick={handleSubtract}>-</QtyBtn>
                      <span>{item.quantity}</span>
                      <QtyBtn>+</QtyBtn>
                    </Quantity>
                    <div>${item.price * item.quantity}</div>
                    <ButtonDelete onClick={() => handleDelete(item)}>
                      delete
                    </ButtonDelete>
                  </GridTable>
                ))}
                <CartTotalWrapper>
                  <CartTotalText>Total:</CartTotalText>
                  <CartTotalText>${cart.total}</CartTotalText>
                </CartTotalWrapper>
                <FlexDiv gap="2rem">
                  <Link href="/menu" passHref>
                    <BtnLinkOutlined w="15rem">Add More Items</BtnLinkOutlined>
                  </Link>
                  <ButtonSolid w="15rem" onClick={() => setCheckout(true)}>
                    Checkout Now!
                  </ButtonSolid>
                </FlexDiv>
              </FlexDiv>
            )}
          </FlexDiv>
        )}
      </SectionContainer>
    </>
  );
};

export default Cart;
