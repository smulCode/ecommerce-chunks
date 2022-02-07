import { StyledCartAnnouncement,Title,SubTitle } from "./CartAnnouncement.styled";


const CartAnnouncement = () => {
  return (
    <StyledCartAnnouncement>
      <Title>FREE SHIPPING ON ORDERS OVER €30.00</Title>
      <SubTitle>(Total must be €30+ after discounts to receive free shipping)</SubTitle>
      </StyledCartAnnouncement>
  );
};

export default CartAnnouncement;
