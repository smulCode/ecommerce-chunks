import {
  StyledCheckout,
  SubTotal,
  PriceSummary,
  CheckoutBtn,
  Wrapper,
} from "./CartCheckout.styled";

const CartCheckout = () => {
  return (
    <StyledCheckout>
      <Wrapper>
        <SubTotal>SUBTOTAL(EXCLUDING TAX + SHIPPING)</SubTotal>
        <PriceSummary>€0.00</PriceSummary>
      </Wrapper>
      <CheckoutBtn>CHECKOUT NOW</CheckoutBtn>
    </StyledCheckout>
  );
};

export default CartCheckout;
