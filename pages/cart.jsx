import {
  CartTable,
  CartTotalBtn,
  CartTotalText,
  CartTotalWrapper,
  GridTable,
  SectionContainer,
} from "../styles/cart.styled";
import styled from "styled-components";
import { FlexDiv, Paragraph, TitleText, Wrapper } from "../styles/Utils.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { reset, removeMenuItem, decreaseQuantity, addMenuItem } from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";
import Link from "next/link";
import { BtnLinkOutlined } from "../styles/Button.styled";

const ButtonDelete = styled.button`
  border: none;
  padding: 0.5rem;
  background-color: var(--warning);
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const Cart = () => {
  const [checkout, setCheckout] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);


  useEffect(() => {
    if (cart.total === 0) setCartEmpty(true);
  }, [cart]);

  const createOrder = async (data) => {
    try {
      const res = await axios.post(`/api/orders`, data);
      if (res.status === 201) {
        dispatch(reset());
        await router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log("Error with CreateOrder function", err);
    }
  };

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
                {cart?.menuItems.map((item, index) => (
                  <GridTable key={item._id}>
                    <div>{item.title}</div>
                    <div><button onClick={() => dispatch(addMenuItem({ ...item, quantity: 1, price: item.price }))}>+</button> qty. {item.quantity} <button onClick={() => dispatch(decreaseQuantity(item._id))}>-</button> </div>
                    <div>${item.price * item.quantity} </div>
                    <ButtonDelete
                      onClick={() =>
                        dispatch(
                          removeMenuItem({
                            index,
                            quantity: item.quantity,
                            total: item.price * item.quantity,
                          })
                        )
                      }
                    >
                      delete
                    </ButtonDelete>
                  </GridTable>
                ))}
                <CartTotalWrapper>
                  <CartTotalText>Total:</CartTotalText>
                  <CartTotalText>${cart.total}</CartTotalText>
                </CartTotalWrapper>

                <CartTotalBtn onClick={() => setCheckout(true)}>
                  Checkout Now!
                </CartTotalBtn>
              </FlexDiv>
            )}
          </FlexDiv>
        )}
      </SectionContainer>
    </>
  );
};

export default Cart;
