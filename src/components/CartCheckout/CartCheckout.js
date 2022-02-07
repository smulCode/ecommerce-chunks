import {
  StyledCheckout,
  SubTotal,
  PriceSummary,
  CheckoutBtn,
} from "./CartCheckout.styled";

const CartCheckout = () => {
  return (
    <StyledCheckout>
      <SubTotal>SUBTOTAL(EXCLUDING TAX + SHIPPING)</SubTotal>
      <PriceSummary>€0.00</PriceSummary>
      <CheckoutBtn>CHECK OUT</CheckoutBtn>
    </StyledCheckout>
  );
};

export default CartCheckout;
