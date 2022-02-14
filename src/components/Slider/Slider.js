
import {StyledSlider ,Arrow,Wrapper,Slide,ImgContainer,Image,InfoContainer,Title,Desc,Button} from "./slider.styled"
import { useSelector } from "react-redux";
import {useState,useEffect } from "react";

import {  useParams } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import { Description } from "@mui/icons-material";


const Slider = () => {

  const products = useSelector((state) => state.productsReducer);
  const [product, setProduct] = useState([]);
const {id} = useParams();

  



  useEffect(() => {
    const findSelected = products.find((product) => product.name === id);
    setProduct(findSelected);
    
   
  }, [id]);

// const radioButton



  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };


  const [selectedValue, setSelectedValue] = useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return (

    <StyledSlider>
      <Wrapper> 
      <RadioButton/>
      <RadioButton/>
      <RadioButton/>
      <RadioButton/>
      </Wrapper>


<ImgContainer> 
<Image/>
</ImgContainer> 

<ReviewScore>
<StarIcon/>
<StarIcon/>
<StarIcon/>
<StarIcon/>
<StarIcon/>
<AmountReviews>(23)</AmountReviews>
</ReviewScore>

<Description>Nuts</Description>

 
    </StyledSlider>
  );
};

export default Slider;
