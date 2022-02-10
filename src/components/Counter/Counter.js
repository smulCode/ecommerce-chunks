import { StyledCounter, Quantity } from "./Counter.styled";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../actions";
import { decrement } from "../../actions";

const Counter = ({border}) => {
  const numb = useSelector((state) => state.counterReducer);

  const dispatch = useDispatch();

  return (
    <StyledCounter border={border}>
      <button onClick={() => dispatch(decrement())}>
        <RemoveIcon />
      </button>

      <Quantity>{Math.round((numb + Number.EPSILON) * 100) / 100}</Quantity>
      <button onClick={() => dispatch(increment(18.00))}>
        <AddIcon />
      </button>
    </StyledCounter>
  );
};

export default Counter;
