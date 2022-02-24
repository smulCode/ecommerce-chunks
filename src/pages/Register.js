import styled from "styled-components";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Medium,Large,ExtraExtraLarge } from "../responsive";


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth,
  registerWithEmailAndPassword,
  signInWithGoogle, } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";




const Container = styled.div`
  /* width: 100vw;
  height: 100vh; */


  background-color: ${({ theme }) => theme.secondaryBg};

`;

const Wrapper = styled.div`
  
  width: 100%;
  padding: 20px;
  ${Medium({ width:"60%", margin:"0 auto"})};
  ${Large({ width:"100%", margin:"0 auto"})};

`;

const Title = styled.h1`
padding-top:20%;
${Large({ paddingTop:"0"})};

  grid-column: span 2;
  font-size: 10vw;
  text-align: center;
  font-weight:800;
  line-height:1rem;
  
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;

  a{
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
  background:red;
  color:white;
  height:100%;
`;



const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [alert, setAlert] = useState(false)

  const navigate = useNavigate();
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
      <Form >
       {alert === true ? <Alert>Please enter name</Alert> : ""}
        <Input 
        placeholder="FULL NAME"
        value={name}
      onChange={(e) => setName(e.target.value)}
        />
        <Input 
        placeholder="Email"
        value={email}
      onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
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
          text="GOOGLE"
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


    <Footer/>
  </Container>
  );
};

export default Register;
