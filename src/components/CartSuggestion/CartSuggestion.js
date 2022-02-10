import {
  StyledCartSuggestion,
  Message,
  Suggestion,
  Question,
  Container,
  Left,
  Image,
  Center,
  ProductTitle,
  Span,
  Wrapper,
  Right,
  Price,
  StyledButton,
} from "./CartSuggestion.styled";
import Counter from "../Counter";
import {addToCart} from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import {useState,useRef} from "react"

const CartSuggestion = () => {
  const quantity = useSelector((state) => state.counterReducer);
  const products = useSelector((state) => state.productsReducer);
const ref = useRef();
  const dispatch = useDispatch();

  const firstProduct = products[0];

  let totalPrice = quantity * firstProduct.price;

  const [display, setDisplay] = useState("inline")

const removeRender = () => {
  dispatch(addToCart(firstProduct,quantity,totalPrice))
  setDisplay("none")
}
console.log(display)

  return (
    <>
    <StyledCartSuggestion display={display}>
      <Message>YOUR CART IS EMPTY</Message>
      <Suggestion>
        <Question>WHY NOT START HERE?</Question>
       <CartItem product={firstProduct}/>
        <StyledButton onClick={removeRender} >ADD TO CART</StyledButton>
      </Suggestion>
    </StyledCartSuggestion>
    </>
  );
};

export default CartSuggestion;
