import {
  StyledCardItem,
  Container,
  Left,
  Image,
  Center,
  ProductTitle,
  Span,
  Wrapper,
  Right,
  Price,
} from "./CartItem.styled";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../Counter";

const CartItem = ({product}) => {
  const quantity = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  let id = 0;

  let totalPrice = quantity * product.price;
  return (
    <StyledCardItem>
      <Container>
        <Left>
          <Image src={product.img} />
        </Left>

        <Center>
          <ProductTitle>
            {product.name}
            <Span> 8 Pack</Span>
          </ProductTitle>
          <Wrapper>
            <Counter border="white" />
          </Wrapper>
        </Center>

        <Right>
          <Price>{Math.round((totalPrice + Number.EPSILON) * 100) / 100}</Price>
        </Right>
      </Container>
    </StyledCardItem>
  );
};

export default CartItem;