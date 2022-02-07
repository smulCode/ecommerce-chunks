import { bool } from "prop-types";
import { StyledMenu,CartTitle } from "./Cart.Styled";
import CartAnnouncement from "../CartAnnouncement";



const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
    <CartTitle>YOUR CART</CartTitle>
    <CartAnnouncement/>
    </StyledMenu>
  );
};


Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
