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
import doubleChocoBar from "../../assets/IMG/Chocolate-Bar-Packaging-Mockup-removebg-preview.png";
import Counter from "../Counter"

const CartSuggestion = () => {
  return (
    <StyledCartSuggestion>
      <Message>YOUR CART IS EMPTY</Message>
      <Suggestion>
        <Question>WHY NOT START HERE?</Question>
        <Container>
          <Left>
            <Image src={doubleChocoBar} />
          </Left>

          <Center>
            <ProductTitle>
              VARIETY PACK
              <Span> 8 Pack</Span>
            </ProductTitle>
            <Wrapper> 

           <Counter border="white"/>
            </Wrapper>
          </Center>

          <Right>
            <Price>€18.99</Price>
          </Right>
        </Container>
        <StyledButton>ADD TO CART</StyledButton>
      </Suggestion>

   
    </StyledCartSuggestion>
  );
};

export default CartSuggestion;
