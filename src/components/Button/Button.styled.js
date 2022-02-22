import styled from "styled-components";

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  /* background: ${(props) => (props.primary ? "#EB3581" : "white")};
  color: ${(props) => (props.primary ? "black" : "white")}; */

  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
  width: ${(props) => props.width};
  height: fit-content;
  padding:${(props) => props.padding};
  margin: 0.5rem auto;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.05em;
  border: 1px solid ${(props) => props.color};
  box-shadow: -2px 3px 0px ${(props) => props.shadowColor};
  border-radius: 8px;
  cursor: pointer;

`;

export default StyledButton;
