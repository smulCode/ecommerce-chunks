import styled from "styled-components";
import { Medium, Large, ExtraExtraLarge } from "../../responsive";

export const StyledSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadioButton = styled.button`
  border-radius: 50%;
  padding: 0.7em;
  border: 1px solid #999;

  transition: all 250ms ease-in-out;
  margin: 1em;
  z-index: 2;
  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;

export const ImgSlider = styled.div`
  width: 100vw;
  height: 50vh;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* margin-top:-4em; */

  height: 100%;
  /* width: 50vw; */
  ${Medium({ width:"50vw" })}
  ${ExtraExtraLarge({padding:"1em"})}

 

  overflow: hidden;

  margin: 0 auto;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  /* margin-left:5%; */
  ${ExtraExtraLarge({ marginLeft:"6%"})}

  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}%);


`;

export const ReviewScore = styled.div`
  margin-top: -4em;
  display: flex;
  /* padding-top:1em; */

  svg {
    color: ${({ theme }) => theme.checkoutBg};
  }
`;

export const AmountReviews = styled.p``;

export const Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  font-size: 1.2em;
  text-align: center;
  font-weight: 200;
`;
