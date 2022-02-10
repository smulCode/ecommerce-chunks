import { StyledCounter, Quantity } from "./Counter.styled";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../actions";
import { decrement } from "../../actions";
import {addToCart} from "../../actions";

const Counter = ({border,product,quantity,totalPrice}) => {
  const numb = useSelector((state) => state.counterReducer);

  const dispatch = useDispatch();

  

const decrementItemQty = () => {
  dispatch(addToCart(product,quantity,totalPrice))
  dispatch(decrement())
}
const incrementItemQty = () => {
  dispatch(addToCart(product,quantity,totalPrice))
  dispatch(increment(18.00))
}

  return (
    <StyledCounter border={border}>
      <button onClick={decrementItemQty}>
        <RemoveIcon />
      </button>
      <Quantity>{Math.round((numb + Number.EPSILON) * 100) / 100}</Quantity>
      <button onClick={incrementItemQty}>
        <AddIcon />
      </button>
    </StyledCounter>
  );
};

export default Counter;
