import { styled } from 'styled-components';

const ZoomButtonWrapper = ({ handler }) => {
  const { zoomHandler } = handler;
  return (
    <>
      <StZoomBtnWrapper>
        <span onClick={() => zoomHandler('in')}>+</span>
        <span onClick={() => zoomHandler('out')}>-</span>
      </StZoomBtnWrapper>
    </>
  );
};
const StZoomBtnWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 3rem;
  top: 10rem;
  z-index: 10;
  border-radius: 0.5rem;
  overflow: hidden;
  > span {
    font-size: 7.2rem;
    color: #585858;
    background-color: white;
    justify-self: center;
    align-self: center;
    height: 8rem;
    width: 8rem;
    text-align: center;
    padding: 1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-use-select: none;
    user-select: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in;
    &:hover {
      background-color: #23917f;
      color: white;
    }
  }
`;

export default ZoomButtonWrapper;
