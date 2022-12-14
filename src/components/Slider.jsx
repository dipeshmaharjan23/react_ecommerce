import { ArrowLeftOutlined } from '@material-ui/icons'
import { ArrowRightOutlined } from '@material-ui/icons'
import styled from "styled-components"
import { useState } from 'react'
import { sliderItems } from '../data'
import { mobile } from '../Responsive'


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    console.log(sliderItems)
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => {
                    return (

                        <Slide bg={item.bg} key={item.id}>
                            <ImgContainer>
                                <Image src={item.img} />
                            </ImgContainer>

                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
                        </Slide>
                    )
                })}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
/* background-color: coral; */
position:relative;
overflow:hidden;

${mobile({display: "none" })}

`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position:absolute;
left : ${props => props.direction === "left" && "10px"} ;
right : ${props => props.direction === "right" && "10px"};
top :0;
bottom: 0;
margin:auto;
cursor:pointer;
opacity:0.6;
z-index :2;
`
const Wrapper = styled.div`
    height:100%;
    display: flex;
    transform :translateX(${(props) => props.slideIndex * -100}vw);
    transition: 1s all ease;
`
const Slide = styled.div`
width: 100vw;
height:100vh;
display:flex;
align-items: center;
background-color: #${props => props.bg};
`
const Image = styled.img`
 height:80%;
 width: 100% ;
 object-fit: cover;
`
const ImgContainer = styled.div`
flex:1;
height: 100%;
display: flex;
align-items: center;
margin-left: 20px ;
`
const InfoContainer = styled.div`
flex:1;
padding:50px ;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
margin:50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
    
`
const Button = styled.button`
    padding: 10px;
    font-size:20px;
    cursor:poiner;
`

