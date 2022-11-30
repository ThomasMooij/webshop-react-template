import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import { Send } from '@mui/icons-material';

const Container = styled.div`
height: 40vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
`
const Descr = styled.div`
margin-top: 15px;
margin-bottom: 5px;;
font-size: 20px;
font-weight: 300;
`
const InputContainer = styled.div`
width: 40%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;

`
const Input = styled.input`
border:none;
flex:8;

`
const Button = styled.button`
flex:2;
border:none;
background-color: teal;
color: white;
`


const Newsletter = () => {
  return (
<Container>
    <Title>Nieuws brief</Title>
    <Descr>Word op de hoogte gehouden voor nieuwste aanbiedingen</Descr>
    <InputContainer>
        <Input placeholder='Uw email'/>
        <Button>
        <SendIcon />
        </Button>
    </InputContainer>
</Container>  
)
}

export default Newsletter