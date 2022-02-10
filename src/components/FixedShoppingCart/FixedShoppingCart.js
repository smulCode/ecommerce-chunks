import {StyledFixedShoppingCart,Container,Checkbox,Price,Span,Text,Wrapper,Quantity,BottomText} from "./FixedShoppingCart.styled";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../actions";
import { decrement } from "../../actions";
import Button from "../Button";



const FixedShoppingCart = () => {
  const counter = useSelector((state) => state.counterReducer);

 

  const dispatch = useDispatch();

  return (
    <StyledFixedShoppingCart>
      <Container>
        <Checkbox />
        <Price>
          €18.99
          <Span>/8 PACK</Span>
        </Price>
          <Text>One time Purchase</Text>
      </Container>
      <Container>
        <Checkbox />
        <Price>
          €16.00
          <Span>/8 PACK</Span>
        </Price>
          <Text>Subscribe & save 15%</Text>
      </Container>

      <Container>
        <Wrapper>
          <button onClick={() => dispatch(decrement(18.99))}>
            <RemoveIcon />
          </button>

          <Quantity>{counter}</Quantity>
          <button onClick={() => dispatch(increment(18.99))}>
            <AddIcon />
          </button>
        </Wrapper>

        <Button />
      </Container>

      <BottomText>Try risk-free with 100% satisfaction guarantee</BottomText>
    </StyledFixedShoppingCart>
  );
};

export default FixedShoppingCart;
