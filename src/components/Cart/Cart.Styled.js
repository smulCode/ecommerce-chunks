// Menu.styled.js
import styled from "styled-components";
import {Medium,ExtraExtraLarge} from "../../responsive"


export const CartTitle = styled.h2`
  position: absolute;
  inset: 0;
  color: ${({ theme }) => theme.primaryDark};
  font-weight: 300;
  width: 100%;
  background-color: red;
  min-height: fit-content;
  padding: 1em;
  
  background-color: ${({ theme }) => theme.secondaryBg};
`;
export const StyledMenu = styled.nav`

  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.secondaryBg};
  min-height: 100vh;
  text-align: left;
  padding-top: 5.2em;
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 9;
  width:100%;
${Medium({  width:"50vw"})} ;
${Medium({  width:"30vw"})} ;



  

  /* @media (max-width: ${({ theme }) => theme.mobile}) {
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
  } */
`;


export const CartBag = styled.div`


overflow-y: auto;

height: 57vh;

`;