import styled from "styled-components";

export const StyledProductSelect = styled.div`
  height: 100%;
  padding-top:60px;
  /* border:1px solid red; */

`;

export const Select = styled.select`
display: flex;
justify-content: space-between;
  text-align: center;
  width: 100%;
  padding: 1em; 
  margin: 0 auto;

  background: #191d1e;
  color: #fff;
  
border: 1px solid white;
border-radius:10px 10px 10px 10px;

  &:focus{
    color: hotpink;
 
  }

  svg{
    font-size:3em;
  }

`;

export const Option = styled.option`
  color:white;
  text-align: center;





`;
