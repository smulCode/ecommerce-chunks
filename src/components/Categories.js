import styled from "styled-components";
// import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import {desktop} from "../responsive"

const Container = styled.div`
  display: flex;
  padding: 0px;
  justify-content: space-between;
  flex-direction: column;
  ${desktop({padding: "20px", flexDirection: "row"})}
`;

const Categories = () => {
  return (
    <Container>
      {/* {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))} */}
    </Container>
  );
};

export default Categories;
