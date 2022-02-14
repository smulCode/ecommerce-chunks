import { useState } from "react";
import { bool } from "prop-types";
import {
  StyledMenu,
  StyledButton,
  Wrapper,
  BrandTitle,
  Nav,
  Container,
} from "./Menu.styled";


import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CartMenuBurger from "../CartMenuBurger";
import Cart from "../Cart";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams,useNavigate } from "react-router-dom";
import {useEffect,useRef} from "react"

const Menu = ({ open, setOpen }) => {
const [productName, setProductName] = useState("")
  const {id} = useParams();
  
  const products = useSelector((state) => state.productsReducer);
  let  navigate = useNavigate();




  const handleClick = (e) => {

    setOpen(false)

  };
  


  const selection =
  products &&
  products.map((product) => {

    return( 
      <StyledButton   key={product.id} bgColor={product.color} color={product.bgColor}>
      <Link   to={`/Product/${product.name}`} onClick={()=> {handleClick()}} >{product.name}</Link>
    </StyledButton>)

  });




  return (
    <StyledMenu open={open}>
      {/* <Nav>
        <Container >
          <Link to="/Login">
            <PersonOutlineOutlinedIcon />
          </Link>
          </Container>
          <CartMenuBurger open={openCart} setOpen={setOpenCart} />
          <Cart open={openCart} setOpen={setOpenCart} />
 
      </Nav> */}

      {selection }
      <Wrapper>
        <StyledButton bgColor="#191D1E" color="#FFF">
          <Link to="/">CONTACT</Link>
        </StyledButton>
        <StyledButton bgColor="#191D1E" color="#FFF">
          <Link to="/">FAQ</Link>
        </StyledButton>
      </Wrapper>
      <StyledButton bgColor="#191D1E" color="#FFF">
        <Link to="/">LOGIN</Link>
      </StyledButton>

      <Wrapper>
        <div>
          <FacebookIcon />
          <InstagramIcon />
        </div>
        <BrandTitle>© 2022 CHUNKS LLC</BrandTitle>
      </Wrapper>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
