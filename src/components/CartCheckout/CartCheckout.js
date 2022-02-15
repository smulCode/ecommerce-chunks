import {
  StyledCheckout,
  SubTotal,
  PriceSummary,
  CheckoutBtn,
  Wrapper,
} from "./CartCheckout.styled";
import { useSelector, useDispatch } from "react-redux";

const CartCheckout = ({total}) => {


  return (
    <StyledCheckout>
      <Wrapper>
        <SubTotal>SUBTOTAL(EXCLUDING TAX + SHIPPING)</SubTotal>
        <PriceSummary>
          €{total.toFixed(2)}
        </PriceSummary>
      </Wrapper>
      <CheckoutBtn>CHECKOUT NOW</CheckoutBtn>
    </StyledCheckout>
  );
};

export default CartCheckout;
