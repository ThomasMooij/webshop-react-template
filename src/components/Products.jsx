import React from 'react';
import styled  from 'styled-components';
import { popularProducts } from '../data';
import Navbar from './Navbar';
import Product from './Product';

const Grid = styled.div`
padding: 20px;
display: grid;
grid-template-columns:  1fr 1fr 1fr;
grid-gap: 5px;
`

const Title = styled.h1`
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 25px;
  background-color: coral;
`;
const Container = styled.div`
  height:100%;
  width:100%;
`;

const Products = () => {
  return (
   
    <Container>
  {/*<Title>Onze producten</Title>*/}

   <Grid>
    {popularProducts.map((item) =>(

        <Product item={item} key={item.id}/>    
    ))}
    </Grid>
    </Container>
  )
}

export default Products