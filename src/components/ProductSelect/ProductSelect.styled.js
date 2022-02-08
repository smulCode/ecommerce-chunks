import styled from "styled-components";

export const StyledProductSelect = styled.div`
  height: 50vh;
  /* border:1px solid red; */

`;

export const Select = styled.select`
  text-align: center;
  width: 100%;
  padding: 1em;
  margin: 0 auto;

  background: #191d1e;
  color: #fff;
  
  border: 1px solid #hotpink;

  &:focus{
    color: hotpink;
  }


`;

export const Option = styled.option`
  color:white;
  border:none;
  text-align: center;
  margin: 0 auto;
`;
