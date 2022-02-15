import { bool } from "prop-types";
import { StyledMenu,CartTitle} from "./Cart.Styled";
import CartAnnouncement from "../CartAnnouncement";
import CartSuggestion from "../CartSuggestion";
import CartCheckout from "../CartCheckout";
import CartItem from "../CartItem";
import { useSelector, useDispatch } from "react-redux";
import {useState,useEffect} from "react"


const Menu = ({ open }) => {
const shoppingCartItem = useSelector((state) => state.shoppingCartReducer);

const [items, setItems] = useState([])

console.log(shoppingCartItem.addedItems)



  return (
    <StyledMenu open={open}>
    <CartTitle>YOUR CART</CartTitle>
    <CartAnnouncement/>
 

    {shoppingCartItem.addedItems ? (<CartItem items={shoppingCartItem.addedItems}/>): (" nope")}
 
 {shoppingCartItem.addedItems[0]  ? (""): ( <CartSuggestion />)}
   
    <CartCheckout total={shoppingCartItem.total}/>
    </StyledMenu>
  );
};


Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
