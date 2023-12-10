import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectorConfirm } from '../../redux/module/customConfirm.slice';
import { useNavigate } from 'react-router-dom';
import { useCustomConfirm } from '../../hooks/useCustomConfirm';

const CustomAlert = () => {
  const { title, targetPage } = useSelector(selectorConfirm);
  const navigate = useNavigate();
  const { handleCloseCustomConfirm } = useCustomConfirm();
  const handleOnClickConfirm = () => {
    navigate(targetPage);
    handleCloseCustomConfirm();
  };
  return (
    <StConfirm>
      <div>
        <h1>{title}</h1>
        <StCustomConfirmButtonWrapper>
          <button onClick={handleOnClickConfirm}>확인</button>
        </StCustomConfirmButtonWrapper>
      </div>
    </StConfirm>
  );
};
const StConfirm = styled.div`
  width: 50rem;
  height: 30rem;
  background-color: var(--lightgray);
  border-radius: 1rem;
  margin: auto;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10rem;

    > h1 {
      font-size: 4rem;
      font-weight: bold;
    }

`;
const StCustomConfirmButtonWrapper = styled.div`
  display: flex;
  column-gap: 3rem;
  > button {
    padding: 1.5rem 4rem;
    border-radius: 0.5rem;
    font-size: 2.4rem;
    font-weight: bold;
    transition: background-color 0.3s ease-in;
    color: var(--lightgray);
  }
  > button:first-child {
    background-color: #7cd6bb;
    &:hover {
      background-color: var(--secondary);
    }
  }
  > button:last-child {
    background-color: var(--accent);
    &:hover {
      background-color: var(--secondary);
    }
  }
`;
export default CustomAlert;
