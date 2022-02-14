import styled from 'styled-components';

export const StyledSlider = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width: 100%;
  height: 85vh;

  position: relative;
  overflow: hidden;
  background-color:${({ theme})=> theme.primaryDark};
  color: ${({ theme})=> theme.primaryLight};
`;

export const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const RadioButton = styled.button`
  border-radius: 50%;
  padding:0.7em;
  border:1px solid #999;
  background-color:transparent;
  transition: all 250ms ease-in-out;
  margin: 0 1em;
  z-index:2;

 

  &:focus{
    background-color:${({ theme})=> theme.primaryAccent};
  border:1px solid ${({ theme})=> theme.primaryAccent};

  }

  &:hover{
    cursor: pointer;
  }
`;

export const ImgContainer = styled.div`

/* border:1px solid red; */
height:50vh;
margin-top:-4em;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit:cover;
`;

export const ReviewScore = styled.div`

  display: flex;
margin-top:-1em;


svg{
  color:${({ theme})=> theme.checkoutBg}
}
`;

export const AmountReviews = styled.p`

`;

export const Description = styled.p`
display:flex;
justify-content:center;
  align-items: center;
  margin: 0 1em;
  font-size: 1.3em;
  font-weight: 200;

  
`;

