import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProductSelect from "../components/ProductSelect";
import Footer from "../components/Footer";


const Container = styled.div`
`;



const Product = () => {

  return (
    <Container>
       <Navbar  bgColor="#191D1E" LogoColor="#EB3581" color="#EB3581"/>
      <ProductSelect/>
      <Footer />
    </Container>
  );
};

export default Product;
