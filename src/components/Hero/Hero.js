import styled from "styled-components";
import wrapperBg from "../../assets/IMG/wrapper-choco.jpg";
import chocoBar from "../../assets/IMG/choco-part-bar.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from "../Button";


const Container = styled.div`
  position: relative;
  height: 100vh;
  background: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
  text-align: center;

  svg{
    display:flex;
    margin:0 auto;
    margin-top: 0.5em;
    position: relative;
    font-size:3em;
    color: ${({ theme }) => theme.primaryAccent};
  }
`;

const Wrapper = styled.div`
  padding-top: 2em;
  position: relative;
`;

const Headline = styled.h1`
  position: absolute;
  font-weight: bold;
  top: 0;
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
  z-index: 1;
`;

const Content = styled.div`
  background-image: url(${wrapperBg});
  height: 65vh;
  width: 100%;
  background-size: cover;
  clip-path: polygon(11% 0, 92% 0, 92% 9%, 0 100%, 0 14%);
`;

const CenterContent = styled.div`
  position: absolute;
  top: 20%;
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
  line-height: 28px;
  letter-spacing: -0.045em;
  -webkit-text-stroke: 1px white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) => theme.primaryAccent};
`;

const BottomContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: -6em;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 10vw;
  line-height: 0.9em;
  letter-spacing: -0.045em;
  -webkit-text-stroke: 2px white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) => theme.primaryLight};
  width: 100%;
`;

const FirstLine = styled.div``;

const SecondLine = styled.div``;
const SubTitle = styled.div`
  font-weight: 300;
  margin: 1em;
  font-size: 1.3em;
  line-height: 16px;
  letter-spacing: -0.045em;
`;

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
          <FirstLine>
            <Span>HEALTHY </Span>
            CHUNKS
          </FirstLine>
          <SecondLine>
            OF
            <Span> HEAVEN</Span>
          </SecondLine>
        </Title>
        <SubTitle>Plant-based candy bars zero sugar</SubTitle>
      </BottomContent>
      <Button text={"BUY NOW"}/>
      <KeyboardArrowDownIcon/>
    </Container>
  );
};

export default Hero;
