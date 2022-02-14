import { bool } from "prop-types";
import { StyledMenu,CartTitle } from "./Cart.Styled";
import CartAnnouncement from "../CartAnnouncement";
import CartSuggestion from "../CartSuggestion";
import CartCheckout from "../CartCheckout";
import CartItem from "../CartItem";
import { useSelector, useDispatch } from "react-redux";
import {useState,useEffect} from "react"


const Menu = ({ open }) => {
const products = useSelector((state) => state.productsReducer);
const shoppingCartItem = useSelector((state) => state.shoppingCartReducer);

const [items, setItems] = useState([])


useEffect(() => {
  setItems(shoppingCartItem)

console.log(items)
}, [])



  return (
    <StyledMenu open={open}>
    <CartTitle>YOUR CART</CartTitle>
    <CartAnnouncement/>
    {shoppingCartItem.id ? (<CartItem product={shoppingCartItem}/>): (" nope")}
    <CartSuggestion />
    <CartCheckout/>
    </StyledMenu>
  );
};


Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
