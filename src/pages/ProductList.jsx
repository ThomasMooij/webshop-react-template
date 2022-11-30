import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Container = styled.div`
`
const Title = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 5px;
`
const Filter = styled.h1`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
`
const Select = styled.select`
margin: 5px;
padding: 5px;

`
const Option = styled.option`

`

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Banner />
        <Title>kaarspellen</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Leeftijd categorie:</FilterText>
                    <Select>
                        <Option disabled selected>0-4</Option>
                        <Option></Option>
                        <Option></Option>
                        <Option></Option>
                    </Select>
                    <Select>
                    <Option disabled selected>Kinderen</Option>
                    <Option></Option>
                    <Option></Option>
                    <Option></Option>
                </Select>
                </Filter>
                <Filter>
                    <FilterText>Sorteer producten:</FilterText>
                <Select>
                    <Option disabled selected>Nieuwst</Option>
                    <Option></Option>
                    <Option></Option>
                    <Option></Option>
                </Select>
                </Filter>
            </FilterContainer>
                <Products />
                <Newsletter />
    </Container>
  )
}

export default ProductList