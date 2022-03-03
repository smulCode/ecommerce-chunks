import styled from "styled-components";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Medium, Large } from "../responsive";

import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondaryBg};
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  ${Medium({ width: "60%", margin: "0 auto" })};
  ${Large({ width: "40%", margin: "0 auto" })};
`;

const Title = styled.h1`
  padding-top: 20%;
  ${Large({ paddingTop: "0" })};
  ${Medium({ paddingTop: "20%", paddingBottom: "5%" })};
  font-size: 10vw;
  text-align: center;
  font-weight: 800;
  line-height: 1rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin: 2em 0px;

    text-decoration: underline;
    cursor: pointer;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 20%;
  margin: 5px 0;
  padding: 1em;
  border-radius: 8px;
  border: none;
`;

const Alert = styled.div`
  background: red;
  color: white;
  height: 100%;
  width: fit-content;
  padding: 0.5rem 3rem;
  border-radius: 10px;
  margin: 0 auto;
`;

const Label = styled.label``;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);


  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = "Register";
  }, []);

  const register = () => {
    // if (!name) alert("Please enter name");
    !name ? setAlert(true) : setAlert(false);

    registerWithEmailAndPassword(name, email, password);
  };
  return (
    <Container>
      <Navbar color="black" LogoColor="black" />

      <Title>REGISTER</Title>
      <Wrapper>
        <Form>
          {alert === true ? <Alert>Please enter name!</Alert> : ""}
          <Label for="name">FULL NAME</Label>
          <Input
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
          <Label for="email">EMAIL</Label>
          <Input
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label for="password">PASSWORD</Label>
          <Input
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            text="SIGN UP"
            shadowColor="#191D1E"
            color="#fff"
            bgColor="Black"
            width="100%"
            onClick={register}
          />
          <Button
            text="WITH GOOGLE"
            shadowColor="#191D1E"
            color="#fff"
            bgColor="Black"
            width="100%"
            onClick={signInWithGoogle}
          />
          Already have an account?
          <Link to="/Login">LOGIN</Link>
        </Form>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Register;
