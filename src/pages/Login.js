import styled from "styled-components";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import { Medium,Large,ExtraExtraLarge } from "../responsive";
import { useState} from "react"


const Container = styled.div`
  /* width: 100vw;
  height: 100vh; */


  background-color: ${({ theme }) => theme.secondaryBg};

`;

const FlexContainer = styled.div`
  ${Large({
    
  padding:"8% 15%",
  display:"grid",
  gridTemplateColumns:"1fr 1fr",
  gridTemplateRows:"10% 1fr",
  placeItems:"center",
  gap:"0 10%",
  

    
    
    })};
  /* padding:8% 15%;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:10% 1fr;
  place-items:center;
  gap:0 10%; */


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
  padding: 1em 0;
  ${Medium({ paddingTop:"25%"})};


`;


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault();
    // console.log('You clicked submit.');

    setEmail("");
    setPassword("");
  }



  return (
    <Container>
      <Navbar color="black" LogoColor="black" />
     <FlexContainer> 
        <Title>LOG IN</Title>
      <Wrapper>
        <Message>
          NOTE: Account login and management is only available for customers
          with active subscription orders
        </Message>
        <Form onSubmit={handleSubmit}>
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
     </FlexContainer>
      <Footer/>
    </Container>
  );
};
export default Login;
