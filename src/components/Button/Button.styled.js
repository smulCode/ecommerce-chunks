import styled from 'styled-components';

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#EB3581" : "white"};
  color: ${props => props.primary ? "black" : "white"};


width: 176px;
height: 56px;
margin: 0 auto;
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 100%;
text-align: center;
letter-spacing: -0.05em;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -2px 3px 0px #fff;
border-radius: 8px;
cursor: pointer;
`;

export default StyledButton;