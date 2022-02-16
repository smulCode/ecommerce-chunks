import styled from 'styled-components';

 export const StyledProductInfo = styled.div`
 position: relative;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  text-align:center;
  padding-bottom:4em;
`;

export const  ChocoContainer = styled.div`
position: absolute;
  top: -5em;
  left: 16.4%;
  right: 16%;
  
`;

export const Image = styled.img`
height:100%;
width:100%;
object-fit:cover;

`;

export const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding-top:7em;

`;

export const BigTitle = styled.h2`
  font-weight: 800;
font-size: 2em;
line-height: 1em;
`;

export const Span = styled.span`
line-height: 3rem;
display:flex;
justify-content:center;
align-items:center;
font-size: 2em;
`;


export const Container = styled.div`
  padding:1rem 0;
  `;


export const Circle = styled.div`
    background-color: ${(props) => props.color};
    border-radius: 50%;
    height:fit-content;
    width:60%;
    border: none;
    margin:0 auto;
  
  `;

  export const Title = styled.h2`
    
  `;

  export const Text = styled.p`
    padding:1em 2em;
    font-weight: 400;
    font-size:1.1rem;


  `;

  export const Disclaimer = styled.p`
     font-weight: 200;
     width:70%;
     margin:0 auto;
     font-size:0.9;
     line-height: 0.9rem;
  `;

  export const FlexContainer = styled.div`
   
  `;