import styled from "styled-components";

export const StyledProductSelect = styled.div`
  height: 100%;
  padding-top: 60px;
  /* border:1px solid red; */
  background-color: ${({ theme }) => theme.primaryDark};
`;

export const Select = styled.select`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 80%;
  padding: 1rem;
  margin: 0 auto;
  /* transition:all 0.5s ease-in-out; */
  font-size: 1.5em;

  background-color: ${({ theme }) => theme.primaryDark};
  color: #fff;

  /* border-bottom: 1px solid white;  */

  border-radius: 10px;
  border: none;
  border-bottom: 1px solid white;

  padding-right: 1em;

  &:focus {
    color: hotpink;
    /* border:1px solid white; */
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Option = styled.option`
  color: white;

  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
