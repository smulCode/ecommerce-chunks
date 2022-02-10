import {StyledFixedShoppingCart,Container,Price,Span,Text,BottomText} from "./FixedShoppingCart.styled";
import Button from "../Button";
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import {useState } from "react";
import Counter from "../Counter/Counter";

const FixedShoppingCart = () => {
  

  

  const [checked, setChecked] = useState(true);
  const [unchecked, setUnChecked] = useState(false);


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  


  return (
    <StyledFixedShoppingCart>
      <Container>
        <Checkbox 
        defaultChecked  

      onChange={handleChange} sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }} />
        <Price>
          €18.00
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
          '&.Mui-checked': {
            color: pink[600],
          },
        }}/>
        <Price>
          €16.00
          <Span>/8 PACK</Span>
        </Price>
          <Text>Subscribe & save 15%</Text>
      </Container>

      <Container>
       
<Counter/>
        <Button  text="ADD TO CART" bgColor="#EB3581" color="#191D1E" shadowColor="#FFFF" width="100vw">ADD TO CART</Button>
      </Container>

      <BottomText>Try risk-free with 100% satisfaction guarantee</BottomText>
    </StyledFixedShoppingCart>
  );
};

export default FixedShoppingCart;
