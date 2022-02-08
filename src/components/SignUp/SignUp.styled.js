import styled from 'styled-components';


export const StyledSignUp = styled.div`
  display:flex;
  flex-direction:column;
  background-color:${({ theme}) => theme.secondaryBg};
  padding:1rem;
  height:40vh;
`;

export const Text = styled.p`
  padding:1rem 0.5rem;
`;