import styled from 'styled-components'
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Products from '../components/Products';
import { mobile } from '../Responsive';

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Colour</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XLL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option >Price (asc)</Option>
                        <Option >Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Footer/>
        </Container>
    )
}

export default ProductList;


const Container = styled.div`
    
`
const Title = styled.h1`
${mobile({margin:"10px"})}

`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`
const Filter = styled.div`
margin: 20px;

${mobile({margin: "0px 20px",display: "flex",flexDirection:"column"})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

${mobile({marginRight: "0px"})}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;

${mobile({margin:"10px"})}
 `
const Option = styled.option``
