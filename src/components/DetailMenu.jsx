import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Kakao } = window;

function DetailMenu({ gether }) {
  const resultUrl = 'http://localhost:3000/detail/wfAycBYFNnYSqozdip4L';

  // JavaScript SDK 초기화 함수
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('12145a9d8ac8f055f6cd69e42d9b4ad2');
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${gether.cost}`,
        description: `${gether.address}`,
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            webUrl: resultUrl,
          },
        },
      ],
    });
  };
  return (
    <StDetailMenuContainer>
      <StDetailShare onClick={shareKakao}>공유하기</StDetailShare>;
      <StDetailJoin>입주신청</StDetailJoin>;
      <Link to={'/'}>
        <StDetailHome>홈으로가기</StDetailHome>;
      </Link>
      <StDetailEdit>수정하기</StDetailEdit>;<StTogelDone>완료</StTogelDone>;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.6rem;
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
const StTogelDone = styled.button`
  width: 15.9rem;
  height: 11rem;
  background-color: #e7e7e7;
  font-size: 2.5rem;
  font-weight: bold;
`;
