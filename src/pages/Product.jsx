import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'


const Product = () => {
    return (
        <Container>
            <Annoucement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eum ex ad magni eos illo vitae eaque unde sed! Accusamus aperiam voluptatem omnis unde, ipsam quod exercitationem neque nobis modi?</Desc>
                    <Price>Rs. 50</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product;

const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;
/* align-items: center; */
`
const ImgContainer = styled.div`
flex:1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit:cover;
`
const InfoContainer = styled.div`
flex:1;
padding: 0 50px ;
`
const Title = styled.h1`
 font-weight: 200;       

`
const Desc = styled.p`
margin : 20px 0px ;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin : 30px 0;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
cursor: pointer;
margin :0 5px ;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
`
const Button = styled.button`
padding: 10px;
border:2px solid teal ;
cursor:pointer ;
background-color: #fff;

&:hover{
    background-color: #f8f4f4;
}
`