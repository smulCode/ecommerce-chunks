import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { useState, useRef } from "react";
import { useOnClickOutside } from "../hooks";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  color: ${({ theme }) => theme.primaryLight};
  background: ${({ theme }) => theme.primaryDark};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
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
  z-index: 100;
`;

const Logo = styled.h1`
  font-weight: bold;
  z-index: 100;
  color: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryAccent};
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
  cursor: pointer;
  margin-left: 25px;
  z-index: 10;
  color: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryLight};
`;

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Container>
      <Wrapper>
        <Left ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </Left>
        <Center >
          <Logo  open={open} setOpen={setOpen}>
            <Link to="/">CHUNKS!</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem open={open} setOpen={setOpen}>
          <Link to="/Login">
          <PersonOutlineOutlinedIcon />
              </Link>
            
          </MenuItem>
          <MenuItem open={open} setOpen={setOpen}>
            <Badge badgeContent={4} color="primary">
              <Link to="/Cart">
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
