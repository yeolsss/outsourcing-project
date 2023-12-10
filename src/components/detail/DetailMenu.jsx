import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCustomConfirm } from '../../hooks/useCustomConfirm';

const { Kakao } = window;

function DetailMenu({ together, isUpdate }) {
  const url = window.location.href;
  const { handleOpenConfirm } = useCustomConfirm();

  // JavaScript SDK 초기화 함수
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('12145a9d8ac8f055f6cd69e42d9b4ad2');
  }, []);

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

  const handleOnClickConfirm = (type) => {
    const newCustomConfirmStatus = {};
    if (type === 'update') {
      newCustomConfirmStatus.title = '비밀번호 확인';
      newCustomConfirmStatus.subTitle = '투게더 수정';
      newCustomConfirmStatus.checkValue = together.password;
      newCustomConfirmStatus.task = 'update';
    } else if (type === 'delete') {
      newCustomConfirmStatus.title = '비밀번호 확인';
      newCustomConfirmStatus.subTitle = '투게더 삭제';
      newCustomConfirmStatus.checkValue = together.password;
      newCustomConfirmStatus.task = 'delete';
    } else if (type === 'done') {
      newCustomConfirmStatus.title = '비밀번호 확인';
      newCustomConfirmStatus.subTitle = '투게더 마감';
      newCustomConfirmStatus.checkValue = together.password;
      newCustomConfirmStatus.task = 'done';
    }
    handleOpenConfirm(newCustomConfirmStatus);
  };

  return (
    <StDetailMenuContainer>
      <StDetailShare onClick={shareKakao}>공유하기</StDetailShare>
      <StHomeButton to={'/'}>홈으로가기</StHomeButton>
      <StDetailJoin href={`mailto: ${together.email}`} target="_blank">
        입주신청
      </StDetailJoin>
      {!isUpdate ? (
        <StDetailEdit onClick={() => handleOnClickConfirm('update')}>
          수정하기
        </StDetailEdit>
      ) : (
        <StDelButton onClick={() => handleOnClickConfirm('delete')}>
          삭제하기
        </StDelButton>
      )}

      <StToggleDone onClick={() => handleOnClickConfirm('done')}>
        투게더 마감
      </StToggleDone>
    </StDetailMenuContainer>
  );
}

export default DetailMenu;

const StDetailMenuContainer = styled.div`
  width: 15rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  z-index: 10;
  border-radius: 0.5rem;
  > * {
    margin: 0 auto;
    width: 12rem;
    height: 11rem;
    border-radius: 0.5rem;
    background-color: var(--accent);
    color: white;
    transition: background-color 0.2s ease-in;
    &:hover {
      background-color: var(--primary);
    }
  }
`;

const StHomeButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: unset;
  font-size: 2.5rem;
  font-weight: bold;
  white-space: pre-wrap;
`;

const StDetailShare = styled.button`
  font-size: 2.5rem;
  font-weight: bold;
`;
const StDetailJoin = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: unset;
  font-size: 2.5rem;
  font-weight: bold;
`;
const StDetailEdit = styled.button`
  font-size: 2.5rem;
  font-weight: bold;
`;
const StToggleDone = styled.button`
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0 2rem;
`;
const StDelButton = styled.button`
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0 1rem;
`;
