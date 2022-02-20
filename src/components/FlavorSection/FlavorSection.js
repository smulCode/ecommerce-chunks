import {
  StyledFlavorSection,
  SmallTitle,
  BigTitle,
  Text,
  Image

} from './FlavorSection.styled'
import { Link } from "react-router-dom";
import Button from '../Button'
import VarietyPack from "../../assets/IMG/Chocolate-Bar-Packaging-Mockup-removebg-preview.png";
const FlavorSection = () => {
  return (
    <StyledFlavorSection>

<Image src={VarietyPack}/>

      <SmallTitle>4 CHEEKY</SmallTitle>
      <BigTitle>DELICIOUS</BigTitle>
      <SmallTitle>FLAVORS TO SAVOR</SmallTitle>

      <Text>FAIRTRADE DARK CHOCOLATE</Text>
      <Text>PLANT-BASED CARAMEL</Text>
      <Text>ZERO SUGAR</Text>
      <Text>GLUTEN FREE</Text>
     

      <Link to="Product/VARIETY%20PACK">
      <Button text={"BUY NOW"} shadowColor="#191D1E" color="#fff" bgColor="#EB3581" width="176px">
      </Button>
      </Link>
      </StyledFlavorSection>
  )
}

export default FlavorSection