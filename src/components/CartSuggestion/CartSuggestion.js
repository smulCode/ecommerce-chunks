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

const CartSuggestion = () => {
  const quantity = useSelector((state) => state.counterReducer);
  const products = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();

  const firstProduct = products[0];

  let totalPrice = quantity * firstProduct.price;

  return (
    <StyledCartSuggestion>
      <Message>YOUR CART IS EMPTY</Message>
      <Suggestion>
        <Question>WHY NOT START HERE?</Question>
        <Container>
          <Left>
            <Image src={firstProduct.img} />
          </Left>

          <Center>
            <ProductTitle>
              {firstProduct.name}
              <Span> 8 Pack</Span>
            </ProductTitle>
            <Wrapper>
              <Counter border="white" />
            </Wrapper>
          </Center>

          <Right>
            <Price>
              {Math.round((totalPrice + Number.EPSILON) * 100) / 100}
            </Price>
          </Right>
        </Container>
        <StyledButton onClick={() => dispatch(addToCart(firstProduct.id,quantity,totalPrice))}>ADD TO CART</StyledButton>
      </Suggestion>
    </StyledCartSuggestion>
  );
};

export default CartSuggestion;
