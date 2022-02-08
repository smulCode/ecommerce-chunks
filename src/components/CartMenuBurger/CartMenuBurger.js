
import { bool, func } from 'prop-types';
import { StyledBurger } from './CartMenuBurger.styled';
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Burger = ({ open, setOpen,color }) => {
  return (
    <StyledBurger color={color} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div /> 
      <div />
      {/* <Badge  badgeContent={4 } color="secondary" > */}
        <ShoppingCartOutlinedIcon />         
       {/* </Badge> */}
    </StyledBurger>
    
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;