
import { bool, func } from 'prop-types';
import { StyledBurger } from './CartMenuBurger.styled';
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from "react-redux";

const Burger = ({ open, setOpen,color,bgColor }) => {
  const items = useSelector((state) => state.shoppingCartReducer);

  return (
    
    <StyledBurger color={color} bgColor={bgColor} open={open} onClick={() => setOpen(!open)}>
      <div><CloseIcon/></div>
      <Badge  badgeContent={items.addedItems.length} color="secondary" >
        <ShoppingCartOutlinedIcon  />         
       </Badge>
    </StyledBurger>
    
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;