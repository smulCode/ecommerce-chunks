import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 1em;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;


  &:focus {
    outline: none;
  }

  h1 {
    position: absolute;
    top: 1em;
    left: 1rem;
  }
  div {
    display: ${({ open }) => (open ? "block" : "none")};
    width: 2rem;
    height: 0.25rem;
    background: ${({ color, open }) =>
      open ? "#999" : color};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    z-index: 10;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  svg {
    display: ${({ open }) => (open ? "none" : "block")};
    color: ${({ theme, open }) =>
      open ? theme.primaryLight : theme.primaryAccent};
  }
`;
