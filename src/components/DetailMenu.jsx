import React from 'react';
import styled from 'styled-components';

function DetailMenu() {
  return (
    <StDetailMenuContainer>
      <StDetailShare>공유하기</StDetailShare>;
      <StDetailJoin>입주신청</StDetailJoin>;
      <StDetailHome>홈으로가기</StDetailHome>;
      <StDetailEdit>수정하기</StDetailEdit>;<StTogeDone>완료</StTogeDone>;
    </StDetailMenuContainer>
  );
}

export default DetailMenu;

const StDetailMenuContainer = styled.div`
  position: fixed;
  right: 0%;
  width: 20.4rem;
  height: 72rem;
  background-color: white;
`;

const StDetailShare = styled.button`
  width: 15.9rem;
  height: 11rem;
  background-color: #e7e7e7;
  font-size: 2.5rem;
  font-weight: bold;
`;
const StDetailJoin = styled.button`
  width: 15.9rem;
  height: 11rem;
  background-color: #e7e7e7;
  font-size: 2.5rem;
  font-weight: bold;
`;
const StDetailHome = styled.button`
  width: 15.9rem;
  height: 11rem;
  background-color: #e7e7e7;
  font-size: 2.5rem;
  font-weight: bold;
`;
const StDetailEdit = styled.button`
  width: 15.9rem;
  height: 11rem;
  background-color: #e7e7e7;
  font-size: 2.5rem;
  font-weight: bold;
`;
const StTogeDone = styled.button`
  width: 15.9rem;
  height: 11rem;
  background-color: #e7e7e7;
  font-size: 2.5rem;
  font-weight: bold;
`;
