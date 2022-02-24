import styled from "styled-components";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Medium,Large,ExtraExtraLarge } from "../responsive";




import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

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



const Alert = styled.div`
  background:red;
  color:white;
`;




const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");

    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  
  return (
    <Container>
    <Navbar color="black" LogoColor="black" />
 
      <Title>DASHBOARD</Title>
    <Wrapper>
 
      <Form >
      
      <div>{name}</div>
      <div>{user?.email}</div>
      
        <Button
          text="LOG OUT"
          shadowColor="#191D1E"
          color="#fff"
          bgColor="Black"
          width="100%"
          onClick={logout}
        />
        
       
 
      </Form>
    </Wrapper>

  
    <Footer/>
  </Container>


  );
}
export default Dashboard;