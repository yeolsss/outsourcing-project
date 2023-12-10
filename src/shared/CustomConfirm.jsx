import { styled } from 'styled-components';
import { useInput } from '../hooks';

const CustomConfirm = () => {
  const [password, handlePassword] = useInput();

  return (
    <StConfirmWrapper>
      <StConfirm>
        <form>
          <h1>비밀번호 확인</h1>
          <input type="password" value={password} onChange={handlePassword} />
          <StCustomConfirmButtonWrapper>
            <button type="button">취소</button>
            <button type="submit">확인</button>
          </StCustomConfirmButtonWrapper>
        </form>
      </StConfirm>
    </StConfirmWrapper>
  );
};

const StConfirmWrapper = styled.div`
  position: absolute;
  opacity: 0;
  z-index: -2;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  width: 100vw;
  height: 100vh;
  display: flex;
  transition: top 0.2s ease-in;
`;

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

      &:focus {
        //border-color: var(--accent);
        //box-shadow: 0 0 0.5rem var(--accent);
        border-color: var(--errorAccent);
        box-shadow: 0 0 0.5rem var(--errorAccent);
      }
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
    background-color: var(--error);
    &:hover {
      background-color: var(--errorAccent);
    }
  }
  > button:last-child {
    background-color: var(--secondary);
    &:hover {
      background-color: var(--accent);
    }
  }
`;

export default CustomConfirm;
