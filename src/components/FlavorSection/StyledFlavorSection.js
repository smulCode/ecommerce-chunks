import styled from 'styled-components';

export const StyledFlavorSection = styled.div`
  text-align: center;
  padding:2rem;
  
`;

export const SmallTitle = styled.h3`
font-weight: 800;
font-size:1.5rem;
`;
export const BigTitle = styled.h2`
  font-size:3rem;
  font-style: italic;
font-weight: 800;
line-height: 1.5rem;
`;

export const Text = styled.p`
  font-weight: 300;
font-size: 1.2em;
line-height: 1rem;
padding:0.5rem 0;
border-bottom: 1px solid #191D1E;
width: 50%;
margin:0 auto;

&:nth-of-type(4){
  border:none;
}


`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit:cover
`;