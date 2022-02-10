import {
  StyledCheckout,
  SubTotal,
  PriceSummary,
  CheckoutBtn,
  Wrapper,
} from "./CartCheckout.styled";
import { useSelector, useDispatch } from "react-redux";

const CartCheckout = () => {
  const products = useSelector((state) => state.productsReducer);



  return (
    <StyledCheckout>
      <Wrapper>
        <SubTotal>SUBTOTAL(EXCLUDING TAX + SHIPPING)</SubTotal>
        <PriceSummary>
          €{products.currentItem ? 
          Math.round((products.currentItem.totalPrice + Number.EPSILON) * 100) / 100
          : 0.0}
        </PriceSummary>
      </Wrapper>
      <CheckoutBtn>CHECKOUT NOW</CheckoutBtn>
    </StyledCheckout>
  );
};

export default CartCheckout;
