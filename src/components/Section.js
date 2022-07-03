import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'

function Section({title , description , backgroundImg,leftBtnText,rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
        
        <Buttons>
        <Fade bottom>
        <ButtonGroup>
            <LeftButton>
            {leftBtnText}
            </LeftButton>
            {
              rightBtnText &&
              <RightButton>
            {rightBtnText}
            </RightButton>
            }
               
        </ButtonGroup>
        </Fade>
        <Downarrow src={`${process.env.PUBLIC_URL}/images/down-arrow.svg`}/>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat: no-repeat;
background-image:url('/images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image: ${props=>`url("${process.env.PUBLIC_URL}/images/${props.bgImage}")`}
`
const ItemText =styled.div`
padding-top: 15vh;
text-align:center;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:35px;
@media(max-width:768px){
    flex-direction:column;
}

`
const LeftButton = styled.div`
background-color: black;
height:40px;
width:256px;
color:white;
display: flex;
cursor:pointer;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:.90;
text-transform:uppercase;
font-size:13px;
margin:8px;
`
const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`
const Downarrow = styled.img`
margin-top:12px;
height:40px;
animation:animateDown infinite 1.5s;

`
const Buttons =styled.div`

`