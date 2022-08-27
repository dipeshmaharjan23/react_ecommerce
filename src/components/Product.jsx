import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src ={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product;

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position:relative;

`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius :50%;
background-color: #fff;
position:absolute ;
`
const Image = styled.img`
height: 75%;
z-index:2;
`
const Info = styled.div`
    width: 100%;
    height: 100%;
    position :absolute ;
    top :0;
    left :0;
    background-color: gray;
    z-index:3 ; 
    display: flex;
    align-items: center;
    justify-content: center;
`
const Icon = styled.div`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color: #fff;
margin: 10px;

:hover{
    background-color: #e9f5f5;
    transform :scale(1.1) ;
}
`