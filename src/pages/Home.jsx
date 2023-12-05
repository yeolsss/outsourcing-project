import React from 'react';
import styled from 'styled-components';
import KakaoMap from '../components/kakaoMap/KakaoMap';
import TogetherList from '../components/togetherList/TogetherList';

function Home() {
  return (
    <StContainer>
      <HomeContainer>
        <TogetherList />
      </HomeContainer>
      <KakaoMap />
    </StContainer>
  );
}

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const HomeContainer = styled.div`
  width: 50vw;
  height: 100%;
`;

export default Home;
