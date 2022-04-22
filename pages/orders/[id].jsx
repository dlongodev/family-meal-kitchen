import axios from "axios";
import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import moment from "moment";

import { SectionContainer } from "../../styles/cart.styled";
import {
  FlexDiv,
  Paragraph,
  TitleText,
  Wrapper,
} from "../../styles/Utils.styled";

const ParagraphText = styled.p`
  font-weight: 300;
  line-height: 2rem;
  margin: 1rem auto;
  text-align: center;
  max-width: 40ch;

  span {
    color: var(--brand-main);
    font-weight: 500;
  }
`;

const Order = ({ order }) => {
  const time = moment(order.deliverytime).format("h:mm A");
  const date = moment(order.deliveryDate).format("MM-DD-YYYY");
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
            {order.method === "Venmo" ? (
              <ParagraphText>
                You chose to make a payment of <span>${order.total}</span> via{" "}
                {order.method}.<br />
                <a href="https://account.venmo.com/u/familymealkitchenllc">
                  <span>Follow this link</span>
                </a>{" "}
                to complete payment or search for{" "}
                <span>@familymealkitchen</span> on your Venmo app.
              </ParagraphText>
            ) : order.method === "Zelle" ? (
              <ParagraphText>
                To complete your payment of <span>${order.total}</span> using
                Zelle, enter <span>chefjoe@familymealkitchen.com</span> or{" "}
                <span>754-264-6268</span> in the recipient field.
              </ParagraphText>
            ) : null}
            <ParagraphText>
              Your delivery is confirmed for: <br />
              <span>
                {date} at {time}
              </span>
            </ParagraphText>
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
