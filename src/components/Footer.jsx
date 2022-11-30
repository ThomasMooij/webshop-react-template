import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';

const Container = styled.div`
display:flex;
background-color: teal;
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
margin:5px;
`
const Logo = styled.h1`
`
const Descr = styled.p`
margin: 20px 0;
`
const Social = styled.div`
display: flex;
justify-content: center;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #${props=>props.color};
display: flex;
align-items:center;
justify-content: center;
margin-right: 10px;
cursor: pointer;

&:hover{
  background-color: lightgreen;
  transform: scale(1.1);
}
`
const Center = styled.div`
flex:1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap:wrap;

`
const ListItem = styled.li`
width:40%;
`
const Right = styled.div`
flex:1;
padding: 20px;
display: flex;
flex-direction: column;
`
const ContactItem = styled.p`
display: flex;
margin: 5px;
`


const Footer = () => {
  return (
<Container>

  <Left>
    <Logo>LEERBEER.</Logo>
    <Descr>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Descr>

    <Social> 
        <SocialIcon color='3b5999'> <FacebookIcon /> </SocialIcon>
        <SocialIcon color='add8e6'> <TwitterIcon /> </SocialIcon>
        <SocialIcon color='e4405f'>  <InstagramIcon /> </SocialIcon>
    </Social>
  </Left> 
 
  <Center>
  <Title>Handige Links</Title>
    <List> 
    <ListItem>Verzend beleid</ListItem>
    <ListItem>Verzend beleid</ListItem>
    <ListItem>Verzend beleid</ListItem>
    <ListItem>Verzend beleid</ListItem>
    <ListItem>Verzend beleid</ListItem>
    <ListItem>Verzend beleid</ListItem>

    </List>
  </Center>

  <Right> 
  <Title>Neem contact met ons op via:</Title>
  <ContactItem> <EmailIcon/> Kootblad@kootblad.nl</ContactItem>
  <ContactItem><CallIcon />0609090909</ContactItem>
  <ContactItem><HomeIcon /> Bernard zweershof</ContactItem>

  </Right>
</Container>
    )
}

export default Footer