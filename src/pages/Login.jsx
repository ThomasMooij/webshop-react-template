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
width: 30%;
height: 50vh;
background-color: whitesmoke;
display: flex;
flex-direction: column;
align-items: center;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
margin: 5px;
`
const Form = styled.form`
display: flex;
flex-direction: column;

`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 5px 5px;
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
const Link = styled.a`
margin: 5px 5px;
font-size: 12px;
text-decoration:underline;
cursor:pointer;
`

const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>Meld u aan</Title>
        <Form>
            <Input placeholder="Gebruikersnaam" />
            <Input placeholder="E-mail" />
           <Link>Wachtwoord vergeten?</Link>
           <Link>Nog geen account? Maak er een aan!</Link>
        </Form>
        <Button>Login</Button>
    </Wrapper>
    
</Container>
  )
}

export default Login