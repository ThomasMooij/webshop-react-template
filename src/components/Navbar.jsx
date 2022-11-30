import React from 'react';
import { Search, ShoppingBagOutlined } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';
import { Badge } from '@mui/material';

const Container = styled.div`
height: 60px;
background-color: salmon;
padding:15px;
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;
{/* NAV LEFT*/}
const Left = styled.div`
flex: 1;
display: flex;
align-items:center;
`;
const Language =styled.span`
font-size: 14px;
cursor:pointer;
`;
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items:center;
margin-left:25px;
padding:5px
`;
const Input = styled.input`
border:none;
`;
{/* NAV CENTER*/}
const Center = styled.div`
flex: 1;
text-align:center;
`;
const Logo = styled.h1`
font-weight:bold
`;
{/* NAV RIGHT*/}
const Right = styled.div`
flex: 1;
display:flex;
align-items:center;
justify-content: flex-end; 
`;
const MenuItem = styled.div`
font-size: 16px;
cursor:pointer;
margin:0 25px;
&:hover{background-color:white}
padding: 10px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{ fontSize:25, color:"gray" }}></Search>
                </SearchContainer>
            </Left>

            <Center>
                <Logo>LEERBEER.</Logo>
            </Center>

            <Right> 
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign Up</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4}>
                    <ShoppingBagOutlined ></ShoppingBagOutlined>
                    </Badge>
                </MenuItem>
            </Right>  
        </Wrapper>
    </Container>
  )
}

export default Navbar