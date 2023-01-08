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
const Container1 = styled.span`
height:10px;
width:10px;
background:red;
position:absolute;
top:${props => `${props.backgroundColor1}px`};
left:${props => `${props.backgroundColor}px`};
/* top:121px;
left:257px; */
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
  console.log("CordClick", cordClick)
  useEffect(() => {

  }, [cordClick])
  return (
    <MainContainer onClick={handleClick}>
      {cordClick?.map((item) => {
        return <Container1 backgroundColor={item?.clientX} backgroundColor1={item?.clientY}>
        </Container1>
      })}

    </MainContainer>
  );
}

export default App;
