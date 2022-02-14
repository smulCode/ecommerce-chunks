import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProductSelect from "../components/ProductSelect";
import Slider from "../components/Slider";
import FixedShoppingCart from "../components/FixedShoppingCart";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`

`;



const Product = () => {
  const products = useSelector((state) => state.productsReducer);
  

  return (
    <Container>
       <Navbar  bgColor="#191D1E" LogoColor="#EB3581" color="#EB3581"/>
      <ProductSelect/>
      <Slider/>
      <FixedShoppingCart />
      <Footer />
    </Container>
  );
};

export default Product;
