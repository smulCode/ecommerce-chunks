import { StyledCounter, Quantity } from "./Counter.styled";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../actions";
import { decrement } from "../../actions";
import { AddQuantity, SubtractQuantity } from "../../actions";

const Counter = ({ border, product }) => {
  const numb = useSelector((state) => state.counterReducer);
  const itemsCart = useSelector((state) => state.shoppingCartReducer);

  console.log(itemsCart)
  const addItem = () => {
    dispatch(AddQuantity(product.id));
    dispatch(increment());
  };
  const SubstractItem = () => {
    dispatch(SubtractQuantity(product.id));
    dispatch(decrement());
  };

  const dispatch = useDispatch();

  

  return (
    <StyledCounter border={border}>
      <button onClick={SubstractItem}>
        <RemoveIcon />
      </button>
      <Quantity>
        {Math.round((numb + Number.EPSILON) * 100) / 100}

      </Quantity>
      <button onClick={addItem}>
        <AddIcon />
      </button>
    </StyledCounter>
  );
};

export default Counter;
