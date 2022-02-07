import {
  StyledCartProducts,
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
  Quantity,
  Right,
  Price,
  StyledButton,
} from "./CartProducts.styled";
import doubleChocoBar from "../../assets/IMG/Chocolate-Bar-Packaging-Mockup-removebg-preview.png";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CartProducts = () => {
  return (
    <StyledCartProducts>
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
              <RemoveIcon />
              <Quantity>1</Quantity>
              <AddIcon />
            </Wrapper>
          </Center>

          <Right>
            <Price>€18.99</Price>
          </Right>
        </Container>
        <StyledButton>ADD TO CART</StyledButton>
      </Suggestion>
    </StyledCartProducts>
  );
};

export default CartProducts;
