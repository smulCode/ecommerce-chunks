import styled from "styled-components";

export const StyledFixedShoppingCart = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 5;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
  padding: 2%;
  border: 1.5px solid ${({ theme }) => theme.primaryLight};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.p`
  flex: 1;
`;

export const Span = styled.span``;

export const Text = styled.p`
  flex: 2;
`;

export const BottomText = styled.p`
  text-align: center;
  color: #999;
  margin: 0 auto;
  font-size: 14px;
`;


export const Checkbox = styled.input`
  border:1px solid ${(props) => props.color};
  
`;