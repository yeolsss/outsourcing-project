import React, { useState } from 'react';
import { styled } from 'styled-components';
import KakaoMap from '../components/kakaoMap/KakaoMap';
import AddForm from '../components/main/AddForm';
import TogetherList from '../components/togetherList/TogetherList';

function Home() {
  const [marker, setMarker] = useState({
    position: {
      lat: 33.450701,
      lng: 126.570667,
    },
  });
  const [isAdding, setIsAdding] = useState(false);

  return (
    <StMainContainer>
      <StLeftContainer>
        <AddBtn onClick={() => setIsAdding(!isAdding)}>새 게더 등록</AddBtn>
        {isAdding ? <AddForm /> : <TogetherList />}
      </StLeftContainer>
      <KakaoMap marker={{ marker, setMarker }} />
    </StMainContainer>
  );
}

const AddBtn = styled.button`
  background-color: yellow;
  border: 1px solid black;
`;
const StMainContainer = styled.div`
  height: 100%;
  background-color: pink;
  display: flex;
  max-height: calc(100% - 8rem);
`;

const StLeftContainer = styled.div`
  background-color: lightskyblue;
  width: 50%;
  height: calc(100vh - 8rem);
  overflow-y: scroll;
`;
export default Home;
