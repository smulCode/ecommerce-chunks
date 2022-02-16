import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { useState, useRef } from "react";
import { useOnClickOutside } from "../hooks";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import CartMenuBurger from "../components/CartMenuBurger";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  position:fixed;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  z-index: 100;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: ${({ theme, open }) =>
    open ? theme.primaryDark : theme.primaryAccent};
  color: ${(props) => props.LogoColor};

  a {
    text-decoration: none;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 35px;
  color: ${(props) => props.color};
  /* z-index: 10; */
  /* color: ${({ theme, open }) =>
    open ? theme.primaryDark : theme.primaryLight}; */
`;

const Navbar = ({ bgColor, color, LogoColor }) => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
  return (
    <Container bgColor={bgColor}>
      <Wrapper>
        <Left ref={node}>
          <Burger color={color} open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </Left>
        <Center>
          <Logo LogoColor={LogoColor} open={open} setOpen={setOpen}>
            <Link to="/">CHUNKS!</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem color={color} open={open} setOpen={setOpen}>
            <Link to="/Login/">
              <PersonOutlineOutlinedIcon />
            </Link>
          </MenuItem>
          <MenuItem open={open} setOpen={setOpen}>
            <CartMenuBurger
              bgColor={bgColor}
              color={color}
              open={openCart}
              setOpen={setOpenCart}
            />
            <Cart open={openCart} setOpen={setOpenCart} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
