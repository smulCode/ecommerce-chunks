import { StyledFooter, Logo,Text,Form,Input,Wrapper,Container,BrandName} from "./Footer.styled";
import Button from "../Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo>CHUNKS!</Logo>
      <Text>LET’S PASS NOTES - SUBSCRIBE TO OUR EMAIL LIST.</Text>
      <Form>
        <Input placeholder="Email" />
        <Button
          text="SUBMIT"
          shadowColor="#FFF"
          color="#191D1E"
          bgColor="#EB3581"
          width="100%"
        />
      </Form>
      <Wrapper>
        <Container>
          <FacebookIcon />
          <InstagramIcon />
        </Container>
        <Text color="#999">PRIVACY POLICY • TERMS OF USE</Text>
        <BrandName color="#999">© 2022 CHUNKS LLC</BrandName>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
