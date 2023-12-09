import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import { styled } from 'styled-components';
import KakaoMap from '../../components/kakaoMap/KakaoMap';

function Layout() {
  return (
    <>
      <StMainContainer>
        <StMainContents>
          <Header />
          <Outlet />
        </StMainContents>
        <StKaKaoMapWrapper>
          <KakaoMap />
        </StKaKaoMapWrapper>
      </StMainContainer>
    </>
  );
}

const StMainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const StMainContents = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;
const StKaKaoMapWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
export default Layout;
