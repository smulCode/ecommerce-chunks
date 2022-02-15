import {
  StyledFixedShoppingCart,
  Container,
  Price,
  Span,
  Text,
  BottomText,
} from "./FixedShoppingCart.styled";
import Button from "../Button";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import { useState, useEffect } from "react";
import Counter from "../Counter/Counter";
import { link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions";

const FixedShoppingCart = () => {
  const products = useSelector((state) => state.productsReducer);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(true);
  const [unchecked, setUnChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    const findSelected = products.find((product) => product.name === id);
    setProduct(findSelected);
  }, [id]);

  return (
    <StyledFixedShoppingCart>
      <Container>
        <Checkbox
          defaultChecked
          onChange={handleChange}
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
        <Price>
          €{product.price}
          <Span>/8 PACK</Span>
        </Price>
        <Text>One time Purchase</Text>
      </Container>
      <Container>
        <Checkbox
          onChange={handleChange}
          checked={unchecked}
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
        <Price>
          €{product.priceSubs}
          <Span>/8 PACK</Span>
        </Price>
        <Text>Subscribe & save 15%</Text>
      </Container>

      <Container>
        <Counter />

        <Button
          onClick={() => dispatch(addToCart(product.id))}
          text="ADD TO CART"
          bgColor="#EB3581"
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
