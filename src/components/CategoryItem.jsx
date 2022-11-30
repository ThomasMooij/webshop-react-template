import styled from 'styled-components';

const Container = styled.div`
flex:1;
margin: 1px;
height:70vh;
position: relative;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;
`
const Text = styled.div`
position: absolute;
width: 100%;
height:100%;
top:0;
left: 0;
display: flex;
justify-content: flex-end;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
font-weight:800;


`
const Button = styled.button`
border: none;
padding: 10px;
color:gray;
cursor: pointer;
font-weight:600;

`

// GEBRUIK LINEAR GRADIENT CSS OM IMAGE BETER ZICHTBAAR TE MAKEN
const CategoryItem = ({item}) => {
  return (
    <Container>
    <Image src={item.img} />
    <Text>
        <Title>{item.title}</Title>
        <Button>Zie details</Button>
    </Text>
    </Container>
  )
}
export default CategoryItem