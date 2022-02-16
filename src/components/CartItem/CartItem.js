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
import {useState,useEffect} from "react"

const CartItem = ({items}) => {
  const shoppingCartReducer = useSelector((state) => state.shoppingCartReducer);
  const dispatch = useDispatch();


  const itemsCart =
    items &&
    items.map((item) => {
     let totalPrice = item.quantity * item.price;
      return (
        <Container key={item.id}>
        <Left>
          <Image src={item.img} />
        </Left>

        <Center>
          <ProductTitle>
            {item.name}
            <Span> 8 Pack</Span>
          </ProductTitle>
          <Wrapper>
            <Counter border="white"  product={item}  />
          </Wrapper>
        </Center>

        <Right>
          <Price>{Math.round((totalPrice  + Number.EPSILON) * 100) / 100}</Price>
        </Right>
      </Container>
      )
    });

  
  return (
    <StyledCardItem>
      {itemsCart}
    </StyledCardItem>
  );
};

export default CartItem;
