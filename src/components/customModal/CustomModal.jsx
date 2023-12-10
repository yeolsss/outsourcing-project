import React from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorConfirm,
  setResult,
} from '../../redux/module/customConfirm.slice';

const CustomModal = () => {
  const selectConfirm = useSelector(selectorConfirm);
  const dispatch = useDispatch();

  const handleOnClickResult = (result) => {
    dispatch(setResult(result));
  };
  return (
    <StConfirm>
      <h1>{selectConfirm.title}</h1>
      <StCustomConfirmButtonWrapper>
        <button type="button" onClick={() => handleOnClickResult(false)}>
          취소
        </button>
        <button type="button" onClick={() => handleOnClickResult(true)}>
          확인
        </button>
      </StCustomConfirmButtonWrapper>
    </StConfirm>
  );
};
const StConfirm = styled.div`
  width: 50rem;
  height: 30rem;
  background-color: var(--lightgray);
  border-radius: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 6rem;

  > h1 {
    font-size: 3rem;
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
export default CustomModal;
