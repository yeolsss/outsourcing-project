import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Kakao } = window;

function DetailMenu({ together, handler: handleIsUpdate, isUpdate }) {
  const url = window.location.href;

  // JavaScript SDK 초기화 함수
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('12145a9d8ac8f055f6cd69e42d9b4ad2');
  }, []);
  // TODO : 삭제
  // 삭제해야 하는 것이 뭐지? 삭제는 마커에서 삭제를 시켜야 한다
  // 그러면 마커에 대한 데이터는 어디에 잇지?

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${together.cost}`,
        description: `${together.address}`,
        imageUrl: `${together.imgPath}`,
        link: {
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <StDetailMenuContainer>
      <StDetailShare onClick={shareKakao}>공유하기</StDetailShare>
      <StHomeButton to={'/'}>홈으로가기</StHomeButton>
      <StDetailJoin href={`mailto: ${together.email}`} target="_blank">
        입주신청
      </StDetailJoin>
      {!isUpdate.isUpdate ? (
        <StDetailEdit onClick={handleIsUpdate}>수정하기</StDetailEdit>
      ) : (
        <StDetailEdit onClick={() => isUpdate.setIsUpdate(false)}>
          수정취소
        </StDetailEdit>
      )}

      <StToggleDone>투게더 마감</StToggleDone>
      <StDelButton>삭제하기</StDelButton>
    </StDetailMenuContainer>
  );
}

export default DetailMenu;

const StDetailMenuContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15rem;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  > * {
    margin: 0 auto;
    width: 12rem;
    height: 11rem;
    border-radius: 0.5rem;
  }
`;

const StHomeButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: unset;
  color: black;
  background-color: #e7e7e7;
  font-size: 2.5rem;
  font-weight: bold;
  white-space: pre-wrap;
`;

const StDetailShare = styled.button`
  background-color: #e7e7e7;
  font-size: 2.5rem;
  font-weight: bold;
`;
const StDetailJoin = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: unset;
  color: black;
  background-color: #e7e7e7;
  font-size: 2.5rem;
  font-weight: bold;
`;
const StDetailEdit = styled.button`
  background-color: #e7e7e7;
  font-size: 2.5rem;
  font-weight: bold;
`;
const StToggleDone = styled.button`
  background-color: #e7e7e7;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0 2rem;
`;
const StDelButton = styled.button`
  background-color: #e7e7e7;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0 2rem;
`;
