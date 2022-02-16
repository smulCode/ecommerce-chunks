import {
  StyledSlider,
  Wrapper,
  RadioButton,
  ImgContainer,
  Image,
  ReviewScore,
  AmountReviews,
  Description,
} from "./slider.styled";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const Slider = ({color}) => {
  const products = useSelector((state) => state.productsReducer);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const findSelected = products.find((product) => product.name === id);
    setProduct(findSelected);
  }, [id]);

  // const [slideIndex, setSlideIndex] = useState(0);
  // const handleClick = (direction) => {
  //   if (direction === "left") {
  //     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  //   } else {
  //     setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  //   }
  // };

  return (
    <StyledSlider>
      <Wrapper>
        <RadioButton color={color}/>
        <RadioButton color={color}/>
        <RadioButton color={color}/>
        <RadioButton color={color}/>
      </Wrapper>

      <ImgContainer>
        <Image src={product.img} />
      </ImgContainer>

      <ReviewScore>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <AmountReviews>({product.reviews})</AmountReviews>
      </ReviewScore>

      <Description>{product.description}</Description>
    </StyledSlider>
  );
};

export default Slider;
