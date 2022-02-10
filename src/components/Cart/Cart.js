import { bool } from "prop-types";
import { StyledMenu,CartTitle } from "./Cart.Styled";
import CartAnnouncement from "../CartAnnouncement";
import CartSuggestion from "../CartSuggestion";
import CartCheckout from "../CartCheckout";
import CartItem from "../CartItem";



const Menu = ({ open }) => {


  return (
    <StyledMenu open={open}>
    <CartTitle>YOUR CART</CartTitle>
    <CartAnnouncement/>
    <CartSuggestion />
    <CartCheckout/>
    </StyledMenu>
  );
};


Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
