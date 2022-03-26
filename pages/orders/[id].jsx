import React from "react";
import {
  DeliveryInfo,
  OrderCompleted,
  OrderSectionContainer,
  OrderTable,
  OrderTotalText,
  OrderTotalWrapper,
} from "../../styles/orders.styled";
import { Paragraph, TitleText, Wrapper } from "../../styles/Utils.styled";

const Order = () => {
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
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>12055</td>
                <td>John Doe</td>
                <td>123 Main Street, Hobe Sound, FL</td>
                <td>$90.00</td>
              </tr>
            </tbody>
          </OrderTable>
          <div>
            <Paragraph align="center">
              Your delivery is confirmed for:
            </Paragraph>
            <Paragraph align="center">
              <span>03/30/2022 at 6pm EST</span>
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
              <strong>Subtotal:</strong> $90.00
            </OrderTotalText>
            <OrderTotalText>
              <strong>Total Items:</strong> 4
            </OrderTotalText>
            <OrderTotalText>
              <strong>Delivery:</strong> FREE
            </OrderTotalText>
            <OrderTotalText>
              <strong>Total:</strong> 90.00
            </OrderTotalText>
          </OrderTotalWrapper>
          <OrderCompleted disabled>Order Sent!</OrderCompleted>
        </Wrapper>
      </OrderSectionContainer>
    </>
  );
};

export default Order;
