import {
  CartTable,
  CartTotalBtn,
  CartTotalText,
  CartTotalWrapper,
  SectionContainer,
} from "../styles/cart.styled";
import { Paragraph, TitleText, Wrapper } from "../styles/Utils.styled";
import { useDispatch, useSelector } from "react-redux";

const cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

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
              {cart.menuItems.map((item, i) => (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
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
              <strong>Subtotal:</strong> ${cart.total}
            </CartTotalText>
            <CartTotalText>
              <strong>Delivery Fee:</strong> N/A
            </CartTotalText>
            <CartTotalText>
              <strong>Total:</strong> ${cart.total}
            </CartTotalText>
          </CartTotalWrapper>
          <CartTotalBtn>Checkout Now!</CartTotalBtn>
        </Wrapper>
      </SectionContainer>
    </>
  );
};

export default cart;
