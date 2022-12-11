import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {sliderItems} from "../data";
import { useState } from 'react';
import {mobile} from "../mobile";

const Container = styled.div`
width: 100%;
height: 100vh;
display:flex;
background-color:#F5F5F5;
position:relative;
overflow:hidden;
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#FAF9F6; 
border-radius:50%;
display:flex;
position:absolute;
align-items:center;
justify-content:center;
top: 0;
bottom: 0;
left: ${props => props.side === "left" && "10px"};
right: ${props => props.side === "right" && "10px"};
margin: auto;
cursor:pointer;
z-index:2;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slide * -100}vw);
`
const Slide = styled.div`
width: 100vw;
height:100vh;
display: flex;
align-items: center;
background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
height:100%;
flex:1;
display:flex;
justify-content: center;
align-items:center;
${mobile({display:"none"})}
`
const Image = styled.img`
height:60%;
width: 60%;
${mobile({display:"none"})}

`
const TextContainer = styled.div`
flex:1;
display:flex;
align-items:center;
flex-direction:column;
justify-content: center;
`
const Title = styled.h1`
font-size:60px;
`
const Descr = styled.p`
font-size: 25px;
font-weight: 500;
margin:50px 0px;
letter-spacing: 1px;
width: 80%;
`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
&:hover{background-color:white}
`

const Slider = () => {

    const [slide , setSlide] = useState(0)
    const handleClick = (side) =>{
        if(side === "left"){
            setSlide( slide > 0 ? slide -1 : 2)
        }else{
            setSlide(slide < 2 ? slide +1 : 0)
        }
    };
  return (
    <Container>
    {slide != 0 ? (
        <Arrow side="left" onClick={()=> handleClick('left')}>
        <ArrowBackIosNewOutlinedIcon /> </Arrow>) : (
        <div></div>
    )}
    <Wrapper slide={slide}>
        {sliderItems.map(slide => ( 

        <Slide bg={slide.bg}>
            <ImgContainer><Image src={slide.img}/></ImgContainer>
            <TextContainer>
                <Title>{slide.title}</Title>
                <Descr>
                {slide.descr}
                </Descr>
                <Button> Check hem uit! </Button>
            </TextContainer>
        </Slide> ))}
    </Wrapper>
        <Arrow side="right" onClick={()=> handleClick('right')}>
            <ArrowForwardIosOutlinedIcon />
        </Arrow>
    </Container>
)}

export default Slider