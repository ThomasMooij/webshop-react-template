import React from 'react';
import styled  from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Container = styled.div`
display: grid;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
grid-gap: 5px;
background-color: #f5fbfd;
flex-direction:column;
`
const Image = styled.img`
height: 75%;
z-index:2;
border-radius: 90%;

`
const Info = styled.div`
display: flex;
justify-content: space-between;
`
const Icon = styled.div`
cursor: pointer;
margin: 5px;
border-radius: 50%;
background-color:white;
transition: all 0,5 ease;

&:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`
const Title = styled.h1`
`
const Product = ({item}) => {
  return (
    <Container>
    <Title>{item.title}</Title>
      <Image src={item.img} />
      <Info> 
        <Icon>
          <ShoppingCartIcon />
        </Icon>
           
        <Icon>
        <SearchIcon />
        </Icon>

        <Icon>
        <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product