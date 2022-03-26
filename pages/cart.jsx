import {
  CartTable,
  CartTotalBtn,
  CartTotalText,
  CartTotalWrapper,
  SectionContainer,
} from "../styles/cart.styled";
import { Paragraph, TitleText, Wrapper } from "../styles/Utils.styled";

const cart = () => {
  return (
    <>
      <Wrapper mqFlex="column">
        <TitleText>Cart</TitleText>
        <Paragraph align="center" m="0">
          Orders will only be accepted 24hour prior to delivery day. <br />
          Please call us for any special request at <span>754-264-6268</span>
        </Paragraph>
      </Wrapper>
      <SectionContainer>
        <Wrapper w="100%" m="0" mqFlex="column" justify="flex-start">
          <CartTable>
            <tbody>
              <tr>
                <th>Menu Items</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>Chicken Parmesan</td>
                <td>1</td>
                <td>45.00</td>
              </tr>
            </tbody>
          </CartTable>
        </Wrapper>
        <Wrapper
          w="100%"
          mqFlex="column"
          bg="var(--brand-main)"
          m="0"
          // align="flex-start"
          shadow="var(--shadow2)"
        >
          <CartTotalWrapper>
            <TitleText
              color="var(--light-100)"
              m="1rem 0"
              align="left"
              mqAlign="left"
            >
              Cart Total
            </TitleText>
            <CartTotalText>
              <strong>Subtotal:</strong> $90.00
            </CartTotalText>
            <CartTotalText>
              <strong>Total Items:</strong> 4
            </CartTotalText>
            <CartTotalText>
              <strong>Delivery:</strong> TBD
            </CartTotalText>
            <CartTotalText>
              <strong>Total:</strong> 90.00
            </CartTotalText>
          </CartTotalWrapper>
          <CartTotalBtn>Checkout Now!</CartTotalBtn>
        </Wrapper>
      </SectionContainer>
    </>
  );
};

export default cart;
