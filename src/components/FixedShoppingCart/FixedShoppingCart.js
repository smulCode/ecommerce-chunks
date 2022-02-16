import {
  StyledFixedShoppingCart,
  Container,
  Price,
  Span,
  Text,
  BottomText,
  Checkbox,
} from "./FixedShoppingCart.styled";
import Button from "../Button";
import { pink } from "@mui/material/colors";
import { useState, useEffect } from "react";
import Counter from "../Counter/Counter";
import { link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions";

const FixedShoppingCart = ({color}) => {
  const products = useSelector((state) => state.productsReducer);
  const cartItems = useSelector((state) => state.shoppingCartReducer);

  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();

  

  useEffect(() => {
    const findSelected = products.find((product) => product.name === id);
    setProduct(findSelected);
  }, [id]);

  return (
    <StyledFixedShoppingCart>
      <Container>
        <Checkbox type="checkbox" defaultChecked color={color}/>
        <Price>
          €{product.price}
          <Span>/8 PACK</Span>
        </Price>
        <Text>One time Purchase</Text>
      </Container>
      <Container>
        <Checkbox type="checkbox"  color={color}
        />
        <Price>
          €{product.priceSubs}
          <Span>/8 PACK</Span>
        </Price>
        <Text>Subscribe & save 15%</Text>
      </Container>

      <Container>
        <Counter product={product} />

        <Button
          onClick={() => dispatch(addToCart(product.id))}
          text="ADD TO CART"
          bgColor={color}
          color="#191D1E"
          shadowColor="#FFFF"
          width="100vw"
        >
          ADD TO CART
        </Button>
      </Container>

      <BottomText>Try risk-free with 100% satisfaction guarantee</BottomText>
    </StyledFixedShoppingCart>
  );
};

export default FixedShoppingCart;
