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
`;

const Logo = styled.h1`
  font-weight: bold;
  a {
    text-decoration: none;
    color: inherit;
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
        <Center>
          <Logo>
            <Link to="/">CHUNKS!</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
          <Link to="/Login">
          <PersonOutlineOutlinedIcon />
              </Link>
            
          </MenuItem>
          <MenuItem>
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
