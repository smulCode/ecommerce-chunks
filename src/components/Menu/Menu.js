import React from "react";
import { bool } from "prop-types";
import { StyledMenu, StyledButton,Wrapper,BrandTitle } from "./Menu.styled";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <StyledButton bgColor="DFC9C9" color="191D1E">
        <Link to="/">VARIETY PACK</Link>
      </StyledButton>
      <StyledButton bgColor="E54949" color="DFC9C9">
        <Link to="/">SALTED PEANUT</Link>
      </StyledButton>
      <StyledButton bgColor="FFD84F" color="AF7347">
        <Link to="/">HAZELNUT CAFE</Link>
      </StyledButton>
      <StyledButton bgColor="C411E1" color="E5E5E5">
        <Link to="/">ALMOND HORCHATA</Link>
      </StyledButton>
      <StyledButton bgColor="4EC15A" color="FFD234">
        <Link to="/">BANANA PECAN</Link>
      </StyledButton>
      <StyledButton bgColor="96FFA0" color="AF7347">
        <Link to="/">DOUBLE DARK MINT</Link>
      </StyledButton>

      <Wrapper> 
      <StyledButton bgColor="191D1E" color="FFF">
        <Link to="/">CONTACT</Link>
      </StyledButton>
      <StyledButton bgColor="191D1E" color="FFF">
        <Link to="/">FAQ</Link>
      </StyledButton>
      </Wrapper>
      <StyledButton bgColor="191D1E" color="FFF">
        <Link to="/">LOGIN</Link>
      </StyledButton>

<Wrapper> 
<div> 
  <FacebookIcon/>
  <InstagramIcon/>
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
