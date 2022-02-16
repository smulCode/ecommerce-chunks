import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProductSelect from "../components/ProductSelect";
import Slider from "../components/Slider";
import FixedShoppingCart from "../components/FixedShoppingCart";
import ProductInfo from "../components/ProductInfo";
import Footer from "../components/Footer";


import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";


const Container = styled.div`
  
`;

const Product = () => {
  const products = useSelector((state) => state.productsReducer);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const findSelected = products.find((product) => product.name === id);
    setProduct(findSelected);
  }, [id]);
  

  return (
    <Container>
       <Navbar  LogoColor={product.bgColor} color={product.bgColor}/>
      <ProductSelect  color={product.bgColor} />
      <Slider color={product.bgColor}/>
      <FixedShoppingCart color={product.bgColor} />
      <ProductInfo color={product.color} bgColor={product.bgColor}/>
      <Footer color={product.bgColor} bgColor={product.color} />
    </Container>
  );
};

export default Product;
