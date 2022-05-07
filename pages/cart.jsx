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
import { reset, removeMenuItem } from "../redux/cartSlice";
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
  const quantity = useSelector((state) => state.quantity);
  const totalPrice = useSelector((state) => state.total);

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
    </>
  );
};

export default Cart;
