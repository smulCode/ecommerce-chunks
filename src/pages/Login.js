import styled from "styled-components";
import {mobile}  from "../responsive";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.secondaryBg};
  background-size: cover;

`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  
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
  border-radius:8px;
  border: none;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Message = styled.p`
  
`;

const Login = () => {
  return (
    <Container>
      <Navbar color="black"/>
      <Wrapper>
        <Title>LOG IN</Title>
        <Message>NOTE: Account login and management is only available for customers with active subscription orders</Message>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Login;
