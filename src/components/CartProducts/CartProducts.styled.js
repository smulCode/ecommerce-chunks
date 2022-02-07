import styled from "styled-components";

export const StyledCartProducts = styled.div`
  position: relative;
  text-align: center;
  height: 50vh;
  width: 100%;
  padding-top: 1em;
  color: ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.secondaryBg};
`;

export const Message = styled.div`
  color: #c4c4c4;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: 0.8em;
  width: 30%;
  margin: 0 auto;
`;

export const Suggestion = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid red; */
  height: 35vh;
  width: 100%;
  padding: 0.5rem;
`;
export const Question = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
 
  flex-direction: row;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primaryLight};
  width: 100%;
  height: 100%;
`;
export const Left = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
export const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0.5em 1em;
`;

export const Span = styled.span`
  font-size: 1.2rem;
`;

export const Wrapper = styled.div`
display:flex;
justify-content: space-evenly;
height: 100%;
padding-top: 0.5em;

svg{
  margin-top:5px;
}
`;

export const Quantity = styled.p`
font-size: 1.5rem;

`;
export const Right = styled.div`
  flex: 1;
position: relative;
  align-items: flex-end;

`;

export const Price = styled.p`
font-size: 1.5rem;
font-weight: 800;
position: absolute;
bottom:0;
right:1rem;

`;


export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8vh;
  background-color: ${({ theme }) => theme.primaryAccent};
  border-radius: 10px;
  border: none;
  margin: 5px auto;
  color: ${({ theme }) => theme.secondaryBg};
  font-size:2rem;
  font-weight: 800;

  &:hover{
    cursor: pointer;
    color: ${({ theme }) => theme.primaryHover}
  }

`;