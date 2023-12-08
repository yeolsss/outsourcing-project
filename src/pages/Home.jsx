import React, { useState } from 'react';
import { styled } from 'styled-components';
import AddForm from '../components/main/AddForm';
import TogetherList from '../components/togetherList/TogetherList';
import KakaoMap from '../components/kakaoMap/KakaoMap';
function Home() {
  const [isAdding, setIsAdding] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <StMainContainer>
      <StLeftContainer>
        <AddBtn onClick={() => setIsAdding(!isAdding)}>새 게더 등록</AddBtn>
        {isAdding ? <AddForm /> : <TogetherList />}
        <StHiddenButton>여기</StHiddenButton>
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
  overflow: hidden;
  position: relative;
`;

const StLeftContainer = styled.div`
  width: 50%;
  //position: relative;
  height: calc(100vh - 8rem);
  overflow-y: scroll;
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

const StHiddenButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  width: 4rem;
  background-color: white;
  transform: translateY(-50%);
`;

export default Home;
