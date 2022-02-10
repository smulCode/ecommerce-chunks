import styled from "styled-components";

export const StyledCheckout = styled.div`
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.checkoutBg};
  color: ${({ theme }) => theme.primaryDark};
  height: 21vh;
  bottom: 0;
  position: absolute;
  width: 100%;
  
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;
export const SubTotal = styled.p`
  flex: 2;
  font-size: 1.1rem;
`;

export const PriceSummary = styled.p`
  font-weight: 800;
  font-size: 1.5rem;
  text-align: right;
  flex: 1;
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.checkoutBg};
  box-sizing: border-box;
  box-shadow: -4px 4px 0px #7c6918;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.checkoutBtn};
  color: ${({ theme }) => theme.checkoutBg};
`;
