// Menu.styled.js
import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #${(props) => props.bgColor};
  border-radius: 10px;
  border: none;
  margin: 5px auto;
  color: #${(props) => props.color};

  a {
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.045em;
  }
`;
export const Nav = styled.nav`
  position: absolute;
  inset: 0;
  /* display: flex;
  gap: 0.5em; */
`;

export const Container = styled.div`
  position: absolute;
  right: 4em;
  top: 1.1em;
  border:1px solid red;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  svg {
    margin-top: 0.4em;
    font-size: 2.5em;
    color: ${({ theme }) => theme.primaryDark};
  }
`;

export const BrandTitle = styled.div`
  color: #999999;
  margin-top: 2em;
`;
export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryLight};
  height: 92vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  padding-top: 4em;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    /* color: ${({ theme }) => theme.primaryDark}; */
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
