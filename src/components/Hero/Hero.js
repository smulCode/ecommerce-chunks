import {Container, Wrapper,Headline,Content,CenterContent,Image,Span,BottomContent,
Title,
FirstLine,
SecondLine,
SubTitle,
ImgContainer,
ContainerBtn
} from "./Hero.styled"
import chocoBar from "../../assets/IMG/choco-part-bar.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from "../Button";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Headline>CHUNKS!</Headline>
        <Content />
      </Wrapper>
      <CenterContent>
        <ImgContainer> 
        
        <Image src={chocoBar}></Image>
        </ImgContainer>
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
     <ContainerBtn> 


      <Link to="Product/VARIETY%20PACK">
      <Button text={"BUY NOW"} shadowColor="#fff" color="#191D1E" bgColor="#EB3581" width="176px">
      </Button>
      </Link>
     </ContainerBtn>
      <KeyboardArrowDownIcon/>
    </Container>
  );
};

export default Hero;
