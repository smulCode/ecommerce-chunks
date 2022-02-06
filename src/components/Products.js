import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useState, useEffect } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


useEffect(() => {
  setProducts(popularProducts)
},[cat])



  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
      console.log(products);
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  // console.log(filteredProducts);
  return (
    <Container>
      {cat ?
      filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      )) :  products.slice(0,8).map((item) => (
        <Product item={item} key={item.id} />
      ))}

      {/* {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))} */}
    </Container>
  );
};

export default Products;
//42
