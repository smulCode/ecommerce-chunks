import styled from "styled-components";

export const StyledExtraFlavor = styled.div`
  background-color: ${({ theme }) => theme.primaryAccent};
  color: ${({ theme }) => theme.primaryLight};
  text-align: center;
  padding: 2rem;
`;

export const Wrapper = styled.div``;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
`;

export const Span = styled.span`
  /* font-style: italic; */
  font-weight: 800;
  -webkit-text-stroke: 1px white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) => theme.primaryDark};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 800;
  font-size: 2.5rem;
`;

export const TextContainer = styled.div``;

export const Text = styled.p``;

export const ImgContainer = styled.div``;

export const Image = styled.img``;
