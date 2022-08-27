import React from 'react'
import styled from 'styled-components'

const Annoucement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Rs.50
        </Container>
    )
}

export default Annoucement;

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color:white;
    display: flex;    
    align-items: center;
    justify-content:center;
    font-size: 14px;
    font-weight: bold;
`