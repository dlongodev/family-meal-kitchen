import axios from "axios";
import React from "react";
import { SectionContainer } from "../../styles/cart.styled";
import {
  OrderCompleted,
  OrderSectionContainer,
  OrderTable,
  OrderTotalText,
  OrderTotalWrapper,
} from "../../styles/orders.styled";
import {
  FlexDiv,
  Paragraph,
  TitleText,
  Wrapper,
} from "../../styles/Utils.styled";

const Order = ({ order }) => {
  return (
    <>
      <div>
        <TitleText m="4rem 1rem 1rem 1rem">Order Confirmation</TitleText>
      </div>
      <SectionContainer>
        <FlexDiv flex="column">
          <TitleText m="1rem" fw="300">
            Your order was sent!
          </TitleText>
          <div>{order.customer}</div>
          <div>{order.address}</div>
          <div>{order.cityStateZip}</div>
          <div>
            <Paragraph align="center">
              You chose to make your payment of
              <span> ${order.total} via Venmo.</span>
              <br /> Follow this link to complete payment.
            </Paragraph>
            <Paragraph align="center">
              Your delivery is confirmed for: <br />
              <span>
                {order.deliveryDate} at {order.deliveryTime}
              </span>
            </Paragraph>
            <Paragraph align="center"></Paragraph>
            <Paragraph align="center">
              If you have any questions, call or text us at
              <span> 754-264-6268</span>
            </Paragraph>
          </div>
        </FlexDiv>
      </SectionContainer>
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
