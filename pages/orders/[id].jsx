import axios from "axios";
import React from "react";
import {
  OrderCompleted,
  OrderSectionContainer,
  OrderTable,
  OrderTotalText,
  OrderTotalWrapper,
} from "../../styles/orders.styled";
import { Paragraph, TitleText, Wrapper } from "../../styles/Utils.styled";

const Order = ({ order }) => {
  return (
    <>
      <div>
        <TitleText m="4rem 1rem 1rem 1rem">Order Confirmation</TitleText>
      </div>
      <OrderSectionContainer>
        <Wrapper w="100%" m="0" mqFlex="column" justify="flex-start">
          <OrderTable>
            <tbody>
              <tr>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>{order.customer}</td>
                <td>{order.address}</td>
                <td>${order.total}</td>
              </tr>
            </tbody>
          </OrderTable>
          <div>
            <Paragraph align="center">
              Your delivery is confirmed for:
            </Paragraph>
            <Paragraph align="center">
              <span>
                {order.deliveryDate} at {order.deliveryTime}
              </span>
            </Paragraph>
            <Paragraph align="center">
              If you have any questions, call or text us at
              <span> 754-264-6268</span>
            </Paragraph>
          </div>
        </Wrapper>
        <Wrapper
          w="100%"
          mqFlex="column"
          bg="var(--brand-main)"
          m="0"
          // align="flex-start"
          shadow="var(--shadow2)"
        >
          <OrderTotalWrapper>
            <TitleText
              color="var(--light-100)"
              m="1rem 0"
              align="left"
              mqAlign="left"
            >
              Cart Total
            </TitleText>
            <OrderTotalText>
              <strong>Subtotal:</strong> ${order.total}
            </OrderTotalText>
            <OrderTotalText>
              <strong>Delivery:</strong> FREE
            </OrderTotalText>
            <OrderTotalText>
              <strong>Total:</strong> ${order.total}
            </OrderTotalText>
          </OrderTotalWrapper>
          <OrderCompleted disabled>Order Sent!</OrderCompleted>
        </Wrapper>
      </OrderSectionContainer>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.BASE_URL}/api/orders/${params.id}`
  );
  return {
    props: { order: res.data },
  };
};

export default Order;
