import styled from "styled-components";
import wrapperBg from "../../assets/IMG/wrapper-choco.jpg";
import chocoBar from "../../assets/IMG/choco-part-bar.png";

const Container = styled.div`
  position: relative;
  height: 100vh;
  background: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
`;

const Wrapper = styled.div`
  padding-top: 5em;
  position: relative;
`;

const Headline = styled.h1`
  position: absolute;
  font-weight: bold;
  top: 8%;
  left: 0px;
  color: ${({ theme }) => theme.primaryAccent};
  font-style: italic;
  font-weight: 900;
  font-size: 26.5vw;
  line-height: 101px;
  margin-left: 7vw;
  display: flex;
  align-items: center;
  letter-spacing: -0.08em;
  -webkit-text-stroke: 2px white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) => theme.primaryAccent};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

const Content = styled.div`
  background-image: url(${wrapperBg});
  height: 65vh;
  width: 100%;
  background-size: cover;
  clip-path: polygon(14% 0, 92% 0, 92% 9%, 0 100%, 0 17%);
  clip-path: polygon(11% 0, 92% 0, 92% 9%, 0 100%, 0 14%);
`;

const CenterContent = styled.div`
  position: absolute;
  top: 25%;
  display: grid;
  place-content: center;
  grid-template-columns: 1fr;
  margin: 0 auto;
  text-align: center;
`;
const Image = styled.img`
  height: 100%;
  width: 70%;
  object-fit: cover;
  transform: scaleX(-1) rotate(10deg);

  margin: 0 auto;
`;

const Span = styled.span`
  font-style: italic;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.045em;
  -webkit-text-stroke: 1px white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) => theme.primaryAccent};
`;

const BottomContent = styled.div`
  position: relative;
  width: 206px;
  height: 62px;
  margin: 0 auto;
`;
const Title = styled.div`
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.045em;
  -webkit-text-stroke: 1px white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) => theme.primaryLight};
`;
const SubTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.045em;
`;

const Button = styled.button``;
const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Headline>CHUNKS!</Headline>
        <Content />
      </Wrapper>
      <CenterContent>
        <Image src={chocoBar}></Image>
      </CenterContent>
      <BottomContent>
        <Title>
          <Span>HEALTHY </Span>
          CHUNKS OF
          <Span> HEAVEN</Span>
        </Title>
        <SubTitle>Plant-based candy bars zero sugar</SubTitle>
      </BottomContent>
      <Button>Buy now</Button>
    </Container>
  );
};

export default Hero;
