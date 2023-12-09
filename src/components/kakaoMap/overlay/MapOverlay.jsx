import React from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleMarker,
  selectCurrentMarker,
} from 'redux/module/currentMarker.slice';
import { selectorTogether } from 'redux/module/together.slice';

const MapOverlay = () => {
  const { isOpen, selectedMarker } = useSelector(selectCurrentMarker);
  const { togethers } = useSelector(selectorTogether);
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
          <span>제목: {together?.title}</span>
          <span>주소: {together?.address}</span>
          <button onClick={handleOnClickCloseOverlay}>❌</button>
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
    width: 100%;
    height: 20rem;

    flex-direction: column;
    padding: 1rem;
    row-gap: 1rem;

    > span:first-child {
      font-weight: 700;
    }
    > span {
      font-size: 1.6rem;
    }
    > button {
      position: absolute;
      top: 1rem;
      right: 0.5rem;
    }
  }
`;
export default MapOverlay;
