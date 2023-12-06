import React from 'react';
import KakaoMap from '../components/kakaoMap/KakaoMap';
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <HomeContainer>Home</HomeContainer>
      <KakaoMap />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const HomeContainer = styled.div`
  width: 50vw;
  height: 100%;
`;
export default Home;
