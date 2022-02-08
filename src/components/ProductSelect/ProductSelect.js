import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StyledProductSelect, Select, Option } from "./ProductSelect.styled";
import { useSelector, useDispatch } from "react-redux";
import { displayItem } from "../../actions";

const ProductSelect = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [selected, setSelected] = useState("VARIETY PACK");

  const productsReducer = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();
  // const item = productsReducer.find((product) => product.name === selected);

 
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    setSelected({
      [e.target.name]: value,
    });

    dispatch(displayItem(selected));
  };

  return (
    <StyledProductSelect>
      <Select name="name" onChange={handleFilters}>
        <Option>VARIETY PACK</Option>
        <Option>SALTED PEANUT</Option>
        <Option>HAZELNUT CAFE</Option>
        <Option>ALMOND HORCHATA</Option>
        <Option>DOUBLE DARK MINT</Option>
        <Option>BANANA PECAN</Option>
      </Select>

      <button onClick={() => dispatch(displayItem("VARIETY PACK"))}>
        click
      </button>

      {selected ? (
        <>
          <div>{selected.id}</div>
          <h1>{selected.name}</h1>
          <img src={selected.img} alt={selected.name} />
          <p>{selected.description}</p>
        </>
      ) : (
        "select item "
      )}
    </StyledProductSelect>
  );
};

export default ProductSelect;
