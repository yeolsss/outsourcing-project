import React, { useState } from 'react';
import { styled } from 'styled-components';
import KakaoMap from '../components/kakaoMap/KakaoMap';
import AddForm from '../components/main/AddForm';
import TogetherList from '../components/togetherList/TogetherList';

function Home() {
  const [isAdding, setIsAdding] = useState(false);
  const [open, setOpen] = useState(false);

  const openClose = 

  return (
    <StMainContainer>
      <StLeftContainer>
        <AddBtn onClick={() => setIsAdding(!isAdding)}>새 게더 등록</AddBtn>
        {isAdding ? <AddForm /> : <TogetherList />}
        <button>여기</button>
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
  position: absolute;
  top: 8rem;
  left: 0;
  z-index: 99999;
  background-color: #fff;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #19685b;
    border-radius: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background: #e6e6e6;
  }
`;

export default Home;
