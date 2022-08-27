import { categories } from "../data"
import styled from 'styled-components'
import CategoryItem from './CategoryItem'

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => {
                return (
                    <CategoryItem item={item} key={item.id}/>
                )
            })}
        </Container>
    )
}

export default Categories

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`