import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  height:100%;
  width:100%;
`;
const Title = styled.h1`
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 25px;
  background-color: coral;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
`;
const Categories = () => {
  return (
    
    <Container>
    <Title>Onze Categorieen</Title>
    <Grid>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Grid>
    </Container>
  )
}
export default Categories