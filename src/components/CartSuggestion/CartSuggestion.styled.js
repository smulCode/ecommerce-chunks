import styled from "styled-components";

export const StyledCartSuggestion = styled.div`
  display: ${(props)=> props.display} ;
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
  height: 42vh;
  width: 100%;
  
`;
export const Question = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
`;



export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
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

