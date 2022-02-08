import { useState } from "react";
import { useLocation } from "react-router-dom";
import {StyledProductSelect,Select,Option} from "./ProductSelect.styled"
import { useSelector, useDispatch } from "react-redux";
import { displayItem } from "../../actions";

const ProductSelect = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});

  const productsReducer = useSelector((state) => state.productsReducer);

console.log(productsReducer);
const dispatch = useDispatch();


  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ 
      ...filters,
      [e.target.name]:value
    })

    console.log(value);
  }

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

          <button onClick={()=> dispatch(displayItem(1))}>click</button>

          {productsReducer.currentItem ?  
(<>
<div>{productsReducer.id}</div>
    <h1>{productsReducer.currentItem.name}</h1>
    <img src={productsReducer.currentItem.img} alt={productsReducer.currentItem.name}/> 
    <p>{productsReducer.currentItem.description}</p>
</>
    )
    : ("select item " )
    
    }
  </StyledProductSelect>)
};

export default ProductSelect;
