import React from 'react'
import styled from 'styled-components'




const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),
 right url("https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=");
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 40%;
height: 60vh;
background-color: whitesmoke;
display: flex;
flex-direction: column;
align-items: center;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;

`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 5px 5px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 5px;
display: flex;
align-items: center;
justify-content: space-evenly;

`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
margin-top:55px;
cursor: pointer;

&:hover{
    background-color: green;
}
`



const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Maak uw account aan</Title>
            <Form>
                <Input placeholder="Naam" />
                <Input placeholder="Achternaam" />
                <Input placeholder="Gebruikersnaam" />
                <Input placeholder="E-mail" />
                <Input placeholder="Wachtwoord" />
                <Input placeholder="Bevestig uw wachtwoord" />   
                <Agreement>Als u een account aanmaakt bevestigd u onze <a><b> VOORWAARDEN</b></a></Agreement>       
            </Form>
            <Button>Maak aan</Button>
        </Wrapper>
        
    </Container>
  )
}

export default Register