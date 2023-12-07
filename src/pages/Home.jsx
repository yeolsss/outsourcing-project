import React, { useState } from 'react';
import { styled } from 'styled-components';
import KakaoMap from '../components/kakaoMap/KakaoMap';
import AddForm from '../components/main/AddForm';
import TogetherList from '../components/togetherList/TogetherList';

function Home() {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <StMainContainer>
      <StLeftContainer>
        <AddBtn onClick={() => setIsAdding(!isAdding)}>새 게더 등록</AddBtn>
        {isAdding ? <AddForm /> : <TogetherList />}
      </StLeftContainer>
      <KakaoMap />
    </StMainContainer>
  );
}

const AddBtn = styled.button`
  background-color: yellow;
  border: 1px solid black;
`;
const StMainContainer = styled.div`
  height: 100%;
  display: flex;
  max-height: calc(100% - 8rem);
`;

const StLeftContainer = styled.div`
  width: 50%;
  height: calc(100vh - 8rem);
  overflow-y: scroll;
  overflow-x: hidden;
`;
export default Home;
