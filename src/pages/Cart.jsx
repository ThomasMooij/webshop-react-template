import { Add, PropaneSharp, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'


const Container= styled.div`

`
const Wrapper= styled.div`
padding: 20px;
`
const Title= styled.h1`
font-weight: 300;
`
const Top= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === 'filled' && "none"};
background-color: ${props=>props.type === 'filled' ? "black" : "transparent"};
color: ${props=>props.type === 'filled' && "white"};

`
const Bottom= styled.div`
display: flex;
justify-content: space-between;
`
const TextContainer = styled.div`

`
const Info = styled.div`
flex:3;
`
const TopText = styled.span`
text-decoration:underline;
cursor: pointer;
margin: 0px 10px;
`

const Product = styled.div`
display: flex;
margin: 5px;

`
const ProductInfo = styled.div`
display:flex;

`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const Adres = styled.span`

`
const PriceInfo = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const ProductAmount = styled.div`
display: flex;
align-items:center;
`
const Amount = styled.div`
font-size: 24px;
margin: 5px;
`
const Price = styled.div`
font-size: 24px;
font-weight: 200;
margin: 10px;
`
const Hr = styled.hr`
background-color: lightgray;
border:none;
height: 1px;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
const SummaryTitle = styled.h1`
`
const SummaryItem = styled.div`
display: flex;
flex-direction: column;
margin: 30px 0px;
`
const SummaryText = styled.span`
margin: 5px 0px;
font-weight: ${props=>props.type === 'total' ? "700" : "500"};
font-size: ${props=>props.type === 'total' ? "24px" : "20px"};
`
const SummaryPrice = styled.span`
margin-top: 5px;
`
const Button = styled.button`
width: 100%;
background-color: black;
color: white;
`
const Cart = () => {
  return (
   <Container>
   <Navbar />
   <Banner />
        <Wrapper>
        <Title>Afrekenen van product: </Title>
            <Top>
                <TopButton>Verder winkelen</TopButton>
                <TextContainer>
                    <TopText>Winkelmandje(1)</TopText>
                    <TopText>Verlanglijstje(1)</TopText>
                </TextContainer>
                <TopButton type='filled'>Afrekenen</TopButton>
            </Top>
            <Bottom>
                <Info>
                <Product>
                    <ProductInfo>
                        <Image src="https://www.puzzelpro.nl/wp-content/uploads/2015/02/oie_transparent-16.png"/>
                        <Details>
                            <ProductName><b>Product:</b>Pauli de Panda op wereldreis puzzel</ProductName>
                            <ProductId><b>ID:</b>1230404</ProductId>
                            <Adres><b>Verzend adres:</b>hof hof 28</Adres>
                        </Details>
                    </ProductInfo>
                    <PriceInfo>
                        <ProductAmount>
                            <Add />
                            <Amount>1</Amount>
                            <Remove />
                        </ProductAmount>
                    <Price>$14,99</Price>
                    </PriceInfo>
                </Product>
                <Hr />
                <Product>
                <ProductInfo>
                    <Image src="https://www.puzzelpro.nl/wp-content/uploads/2015/02/oie_transparent-16.png"/>
                    <Details>
                        <ProductName><b>Product:</b>Pauli de Panda op wereldreis puzzel</ProductName>
                        <ProductId><b>ID:</b>1230404</ProductId>
                        <Adres><b>Verzend adres:</b>hof hof 28</Adres>
                    </Details>
                </ProductInfo>
                <PriceInfo>
                    <ProductAmount>
                        <Add />
                        <Amount>1</Amount>
                        <Remove />
                    </ProductAmount>
                <Price>$14,99</Price>
                </PriceInfo>
            </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Bestelling Overzicht</SummaryTitle>
                    <SummaryItem>
                        <SummaryText>Subtotaal</SummaryText>
                        <SummaryPrice>$80</SummaryPrice>
                        <SummaryText>Verzendkosten</SummaryText>
                        <SummaryPrice>$8</SummaryPrice>
                        <SummaryText type="total">totaal bedrag</SummaryText>
                        <SummaryPrice>-5,99</SummaryPrice>
                    </SummaryItem>
                    <Button>Doorgaan naar checkout</Button>
                </Summary>
            </Bottom>
        </Wrapper>
   </Container>
  )
}

export default Cart