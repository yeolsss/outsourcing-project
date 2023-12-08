import React from 'react';
import { styled } from 'styled-components';

const ZoomButtonWrapper = ({ handler }) => {
  const { zoomHandler } = handler;
  return (
    <>
      <StZoomBtnWrapper>
        <span onClick={() => zoomHandler('in')}>
          <img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
            alt="확대"
          />
        </span>
        <span onClick={() => zoomHandler('out')}>
          <img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
            alt="축소"
          />
        </span>
      </StZoomBtnWrapper>
    </>
  );
};
const StZoomBtnWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 3rem;
  top: 10rem;
  z-index: 10;
  border-radius: 0.5rem;
  overflow: hidden;
  > span {
    background-color: white;
    padding: 2rem;
    transition: background-color 0.3s ease-in;
    &:hover {
      background-color: #23917f;
    }
  }
`;

export default ZoomButtonWrapper;
