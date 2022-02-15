import {
  StyledCartSuggestion,
  Message,
  Suggestion,
  Question,
  StyledButton,
  Container,
  Left,
  Image,
  Center,
  ProductTitle,
  Span,
  Wrapper,
  Right,
  Price,
  CartItem,
} from "./CartSuggestion.styled";
import Counter from "../Counter";
import { addToCart } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const CartSuggestion = () => {
  const quantity = useSelector((state) => state.counterReducer);
  const products = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();

  const firstProduct = products[0];

  let totalPrice = quantity * firstProduct.price;

  const [display, setDisplay] = useState("block");

  const removeRender = () => {
    dispatch(addToCart(firstProduct.id));
    setDisplay("none");
  };

  return (
    <>
      <StyledCartSuggestion display={display}>
        <Message>YOUR CART IS EMPTY</Message>
        <Suggestion>
          <Question>WHY NOT START HERE?</Question>

          <CartItem>


          <Container key={firstProduct.id}>
        <Left>
          <Image src={firstProduct.img} />
        </Left>

        <Center>
          <ProductTitle>
            {firstProduct.name}
            <Span> 8 Pack</Span>
          </ProductTitle>
          <Wrapper>
            <Counter border="white"  />
          </Wrapper>
        </Center>

        <Right>
          <Price>{Math.round((totalPrice + Number.EPSILON) * 100) / 100}</Price>
        </Right>
      </Container>
          </CartItem>
          <StyledButton onClick={removeRender}>ADD TO CART</StyledButton>
        </Suggestion>
      </StyledCartSuggestion>
    </>
  );
};

export default CartSuggestion;
