import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { StyledProductSelect, Select, Option } from "./ProductSelect.styled";
import { useSelector, useDispatch } from "react-redux";

const ProductSelect = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [selected, setSelected] = useState("VARIETY PACK");
  const [product, setProduct] = useState([]);
  const products = useSelector((state) => state.productsReducer);

  const handleFilters = (e) => {
    const value = e.target.value;

    setSelected(value);
  };

  useEffect(() => {
    const findSelected = products.find((product) => product.name === selected);
    setProduct(findSelected);
  }, [selected]);

  const option =
    products &&
    products.map((product) => {
      return <Option key={product.id}>{product.name}</Option>;
    });

  return (
    <StyledProductSelect>
      <Select name="name" onChange={handleFilters}>
        {option}
      </Select>

      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
    </StyledProductSelect>
  );
};

export default ProductSelect;
