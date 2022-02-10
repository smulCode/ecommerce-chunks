import {
  StyledCartSuggestion,
  Message,
  Suggestion,
  Question,
  StyledButton,
} from "./CartSuggestion.styled";
import { addToCart } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import { useState } from "react";

const CartSuggestion = () => {
  const quantity = useSelector((state) => state.counterReducer);
  const products = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();

  const firstProduct = products[0];

  let totalPrice = quantity * firstProduct.price;

  const [display, setDisplay] = useState("block");

  const removeRender = () => {
    dispatch(addToCart(firstProduct, quantity, totalPrice));
    setDisplay("none");
  };

  return (
    <>
      <StyledCartSuggestion display={display}>
        <Message>YOUR CART IS EMPTY</Message>
        <Suggestion>
          <Question>WHY NOT START HERE?</Question>
          <CartItem product={firstProduct} />
          <StyledButton onClick={removeRender}>ADD TO CART</StyledButton>
        </Suggestion>
      </StyledCartSuggestion>
    </>
  );
};

export default CartSuggestion;
