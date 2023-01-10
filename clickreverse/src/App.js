import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  height:100%;
  width:100%;
  position:fixed;
  background:#f6f6f6;
  top: 0;
  left:0;
`
const ContainerVisual = styled.span`
height:10px;
width:10px;
background:red;
position:absolute;
top:${props => `${props.backgroundColor.clientY}px`};
left:${props => `${props.backgroundColor.clientX}px`};
`
const Botao = styled.button`
align-items:center;
justify-content:center;
padding:5px;
margin:5px;
`
const ContainerBotao = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

function App() {
  const [cordClick, setCordClick] = useState([])
  const [graveClick, setGraveClick] = useState([])

  const handleClick = (event) => {
    const coordinates = {
      clientX: event.clientX,
      clientY: event.clientY
    }
    setCordClick([...cordClick, coordinates])
  }

  const delClick = (event) => {
    event.stopPropagation()
    if (cordClick.length === 0) {
      return
    }
    const lastItem = cordClick[cordClick.length - 1]
    setGraveClick((array) => [...array, lastItem])
    setCordClick((array) => {
      const newState = [...array].slice(0, -1)
      return newState
    })
  }

  const redoClick = (event) => {
    event.stopPropagation()
    if (graveClick.length === 0) {
      return
    }
    const recoveredItem = graveClick[graveClick.length - 1]
    setGraveClick((array) => {
      const newState = [...array].slice(0, -1)
      return newState
    })
    setCordClick([...cordClick, recoveredItem])
  }

  const clearClick = (event) => {
    event.stopPropagation()
    setCordClick([])
    setGraveClick([])
  }
  return (
    <MainContainer onClick={handleClick}>
      <ContainerBotao>
        <Botao onClick={delClick}>Desfazer</Botao>
        <Botao onClick={redoClick}>Refazer</Botao>
        <Botao onClick={clearClick}>Limpar</Botao>
      </ContainerBotao>
      {cordClick?.map((item, index) => {
        return <ContainerVisual key={index} backgroundColor={item} ></ContainerVisual>
      })}
    </MainContainer>
  );
}

export default App;
