import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  handleMarker,
  selectCurrentMarker,
} from 'redux/module/currentMarker.slice';
import { selectTogether } from 'redux/module/together.slice';
import { styled } from 'styled-components';

const MapOverlay = () => {
  const { isOpen, selectedMarker } = useSelector(selectCurrentMarker);
  const { togethers } = useSelector(selectTogether);
  const dispatch = useDispatch();

  const together = togethers?.find((together, idx) => {
    return together.docId === selectedMarker.docId;
  });

  const handleOnClickCloseOverlay = () => {
    dispatch(handleMarker(false));
  };

  return (
    <>
      <StBottomOverlay $isOpen={isOpen}>
        <div>
          <img src={together?.imgPath} />
          <StOverlayContent>
            <span>{together?.cost} 만원</span>
            <span>{together?.address}</span>
            <StOverlayTitle>{together?.title}</StOverlayTitle>
            <span>모집인원 / {together?.togetherNum} 명</span>
            <StLink to={`/detail/${together?.docId}`}>
              <StSeeMoreBtn>상세보기</StSeeMoreBtn>
            </StLink>
            <StCloseBtn onClick={handleOnClickCloseOverlay}>×</StCloseBtn>
          </StOverlayContent>
        </div>
      </StBottomOverlay>
    </>
  );
};

const StBottomOverlay = styled.div`
  position: absolute;
  bottom: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  right: 0;
  z-index: 100;
  width: 100%;
  transition: bottom 0.3s ease-in;

  > div {
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 20rem;
    row-gap: 1rem;
    > img {
      justify-self: flex-start;
      width: 32rem;
    }
  }
`;

const StOverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.5rem 3rem;
  width: 50%;
  margin: 1rem;
  overflow: hidden;
  gap: 0.6rem;
  > span:first-child {
    font-size: 2.4rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    margin-bottom: 1rem;
  }
  > span {
    font-size: 1.5rem;
  }
`;

const StOverlayTitle = styled.span`
  color: var(--accent);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

const StCloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  font-size: 3.5rem;
`;

const StLink = styled(Link)`
  width: 100%;
  height: 4rem;
`;

const StSeeMoreBtn = styled.button`
  /* width: 30rem; */
  width: 100%;
  height: 4rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.5rem;
  background-color: var(--secondary);
  transition: 0.2s ease-in-out;
  margin: 1rem 0 0 0;
  &:hover {
    background-color: var(--accent);
  }
`;
export default MapOverlay;
