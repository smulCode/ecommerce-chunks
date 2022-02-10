import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.secondaryBg};
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  padding-top:60px;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 20%;
  margin: 5px 0;
  padding: 1em;
  border-radius: 8px;
  border: none;
`;

const Link = styled.a`
  margin: 2em 0px;

  text-decoration: underline;
  cursor: pointer;
`;

const Message = styled.p`
  font-size: 1em;
  padding: 3em 0;
`;

const Login = () => {
  return (
    <Container>
      <Navbar color="black" LogoColor="black" />
      <Wrapper>
        <Title>LOG IN</Title>
        <Message>
          NOTE: Account login and management is only available for customers
          with active subscription orders
        </Message>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button
            text="LOGIN"
            shadowColor="#191D1E"
            color="#fff"
            bgColor="Black"
            width="100%"
          />
          <Link>FORGOT PASSWORD?</Link>
        </Form>
      </Wrapper>
      <SignUp />
      <Footer/>
    </Container>
  );
};
export default Login;
