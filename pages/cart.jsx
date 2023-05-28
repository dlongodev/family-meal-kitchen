import {
  CartTotalBtn,
  CartTotalText,
  CartTotalWrapper,
  CartItem,
  SectionContainer,
  CartQtyContainer,
  ButtonDelete
} from "../styles/cart.styled";
import styled from "styled-components";
import { FlexDiv, Paragraph, TitleText, Wrapper } from "../styles/Utils.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  reset,
  removeMenuItem,
  decreaseQuantity,
  addMenuItem,
  setCartInitialState,
} from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";
import Link from "next/link";
import { BtnLinkOutlined } from "../styles/Button.styled";
import { parseCookies } from "./api/parseCookies";
import styles from "../styles/CartModal.module.css";


const Cart = ({ initialCartValues }) => {
  const [checkout, setCheckout] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.total === 0) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
  }, [cart]);

  useEffect(() => {
    dispatch(setCartInitialState(JSON.parse(initialCartValues)));
  }, []);

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
                  <CartItem key={item._id}>
                    <div style={{width: "100%"}}>
                      <strong>{item.title}</strong>
                    </div>
                    <CartQtyContainer>
                      <div>
                        <div className={styles.cart__quantity_price_container}>
                          <div
                            className={styles.cart__quantity_display_container}
                          >
                            <button
                              aria-label="Decrement quantity"
                              title="Decrement quantity"
                              onClick={() =>
                                dispatch(decreaseQuantity(item._id))
                              }
                            >
                              <svg
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                alt=""
                                title=""
                                className="snipcart__icon"
                              >
                                <path
                                  d="M48 31H16v2.462h32V31z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              aria-label="Increment quantity"
                              title="Increment quantity"
                              onClick={() =>
                                dispatch(
                                  addMenuItem({
                                    ...item,
                                    quantity: 1,
                                    price: item.price,
                                  })
                                )
                              }
                            >
                              <svg
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                alt=""
                                title=""
                                className="snipcart__icon"
                              >
                                <path
                                  d="M33.23 30.77H48v2.46H33.23V48h-2.46V33.23H16v-2.46h14.77V16h2.46v14.77z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className={styles.cart__price}>
                      ${(item.price * item.quantity).toFixed(2)}
                      </div>
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
                        aria-label="Remove item"
                        title="Remove item"
                      >
                        <svg
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          alt="delete"
                          title="delete"
                        >
                          <path
                            d="M22 4v6.47H12v3.236h40V10.47H42V4H22zm3.333 6.47V7.235H38.67v3.235H25.333zm20.001 9.707h3.333V59H15.334V20.177h3.333v35.588h26.667V20.177zm-15 29.116V23.412h3.334v25.881h-3.334z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </ButtonDelete>
                    </CartQtyContainer>
                  </CartItem>
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

Cart.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);
  let initialState = {
    menuItems: [],
    quantity: 0,
    total: 0,
  };
  return {
    initialCartValues: cookies.cart ? cookies.cart : initialState,
  };
};

export default Cart;
