import React, { useState } from 'react';
import { styled } from 'styled-components';
import AddForm from '../components/main/AddForm';

function Home() {
  const [isAdding, setIsAdding] = useState(false);

  return (
  <StMainContainer>
    <AddBtn onClick={()=> setIsAdding(!isAdding)}>새 게더 등록</AddBtn>
    <StLeftContainer>
      {isAdding? (
        <AddForm />
      ) : (
        <div>리스트영역</div>
      )}

    </StLeftContainer>
    <div>
      지도영역
    </div>
  </StMainContainer>)
}

export default Home;

const AddBtn = styled.button`
background-color: yellow;
border: 1px solid black;
`;

const StMainContainer = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: row;
`;

const StLeftContainer = styled.div`
  background-color: lightskyblue;
  width: 50%;
`;