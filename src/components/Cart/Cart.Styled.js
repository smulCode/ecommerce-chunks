// Menu.styled.js
import styled from "styled-components";

export const CartTitle = styled.h2`
  position: absolute;
  inset: 0;
  color: ${({ theme }) => theme.primaryDark};
  font-weight: 300;
  width: 100%;
  background-color: red;
  height: fit-content;
  padding: 1em;
  background-color: ${({ theme }) => theme.secondaryBg};
`;
export const StyledMenu = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding-top: 5.2em;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
