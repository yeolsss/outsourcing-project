import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useInput } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectorConfirm } from '../../redux/module/customConfirm.slice';
import { useCustomConfirm } from '../../hooks/useCustomConfirm';
import { setUpdate } from '../../redux/module/detailStatus.slice';

const CustomConfirmForm = () => {
  const [password, handlePassword] = useInput();
  const [passwordError, setPasswordError] = useState(false);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const selectConfirm = useSelector(selectorConfirm);
  const { handleCloseCustomConfirm } = useCustomConfirm();

  const handleOnSubmitConfirm = (e) => {
    e.preventDefault();
    if (password === selectConfirm.checkValue) {
      dispatch(setUpdate(true));
      handleCloseCustomConfirm();
    } else {
      setPasswordError(true);
      passwordRef.current.focus();
      dispatch(setUpdate(false));
    }
  };

  return (
    <StConfirm onSubmit={handleOnSubmitConfirm} $passwordError={passwordError}>
      <form>
        <h1>비밀번호 확인</h1>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          ref={passwordRef}
        />
        <StCustomConfirmButtonWrapper>
          <button type="button" onClick={handleCloseCustomConfirm}>
            취소
          </button>
          <button type="submit">확인</button>
        </StCustomConfirmButtonWrapper>
      </form>
    </StConfirm>
  );
};

const StConfirm = styled.div`
  width: 50rem;
  height: 50rem;
  background-color: var(--lightgray);
  border-radius: 1rem;
  margin: auto;

  > form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 6rem;

    > h1 {
      font-size: 4rem;
      font-weight: bold;
    }

    > input {
      border: unset;
      border-radius: 0.5rem;
      width: 60%;
      padding: 2rem 1rem;
      font-size: 1.6rem;
      outline: unset;
      border: 0.1rem solid rgba(0, 0, 0, 0);
      transition: border-color 0.2s ease-in;
      position:relative;
      
      &:focus {
        ${({ $passwordError }) => {
          if ($passwordError) {
            return `border-color: var(--errorAccent);
            box-shadow: 0 0 0.5rem var(--errorAccent);`;
          } else {
            return `border-color: var(--accent);
            box-shadow: 0 0 0.5rem var(--accent);`;
          }
        }}
      }
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
export default CustomConfirmForm;
