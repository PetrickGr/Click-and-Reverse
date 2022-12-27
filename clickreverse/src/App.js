import React, { useState } from "react";
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
const Container1 = styled.div`
height:10px;
width:10px;
background:red;
position:absolute;
top:${props => props?.backgroundColor?.clientY};
left:${props => props?.backgroundColor?.clientX};
`

function App() {
  const [cordClick, setCordClick] = useState([])
  const handleClick = (event) => {
    const coordinates = {
      clientX: event.clientX,
      clientY: event.clientY
    }
    setCordClick([...cordClick, coordinates])
    console.log(coordinates)
  }
  console.log("CordClick",cordClick)
  return (
    <MainContainer onClick={handleClick}>
      {cordClick?.map(() => {
        <Container1 backgroundColor={cordClick}>
          
        </Container1>
      })}

    </MainContainer>
  );
}

export default App;
