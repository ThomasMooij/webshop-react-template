import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`

 `
const Wrapper = styled.div`
display: flex;
padding: 50px;
 `
const ImgContainer = styled.div` 
flex: 1;
`
const Image  = styled.img` 
width: 80%;
height: 70vh;
`
const InfoContainer = styled.div` 
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 50px;
`
const Title = styled.div`
font-weight: 500;
font-size: 40px;
 `

const Descr = styled.div` 
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
margin: 20px 0px;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const ColorOption = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color} ;
margin: 0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const SizeOption = styled.option`

`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: flex-end; 
flex-direction: column;
margin-top: 50px;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
margin: 20px 0px;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const ButtonContainer = styled.div`
`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
  background-color: #f8f4f4;
}
`

const Product = () => {
  return (
    <Container>
    <Navbar />
    <Banner />

    <Wrapper>
        <ImgContainer>
            <Image src="https://media.s-bol.com/R17vMEoKn5rw/550x414.jpg"/>
        </ImgContainer>
        <InfoContainer>
            <Title>Kaartspel</Title>

            <FilterContainer>
            <Filter>
                <FilterTitle>Kleur:</FilterTitle>
                <ColorOption color="black"></ColorOption>
                <ColorOption color="blue"></ColorOption>
                <ColorOption color="gray"></ColorOption>
            </Filter>

            <Filter>
              <FilterTitle>Maat:</FilterTitle>
              <FilterSize>
                <SizeOption>s</SizeOption>
                <SizeOption>m</SizeOption>
                <SizeOption>l</SizeOption>
                <SizeOption>xl</SizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

            <Descr>"Ook op het gebied van kaarspellen kunt u bij ons terecht. 
            Vooral woordzoekertjes voor kinderen zijn zeer geliefd, maar we maken ook sudoku's en Zweedse puzzels voor kinderen Graag informeren we u over de mogelijkheden</Descr>
           
            <Price>$20</Price>

            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <ButtonContainer>
                <Button>Aan winkel wagen toevoegen</Button>
              </ButtonContainer>
            </AddContainer>

        </InfoContainer>
    </Wrapper>

    <Newsletter />
    <Footer />
    </Container>
  )
}

export default Product