import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { selectPosition } from '../../redux/module/position.slice';

function AddForm() {
  const [isImgSelected, setIsImgSelected] = useState(false);
  const [imgInputValue, setImgInputValue] = useState(null);
  const position = useSelector(selectPosition);
  console.log('현재 활성화되어 있는 투게더의 position', position);
  const addImgHandler = (e) => {
    setImgInputValue(e.target.files[0]);
    setIsImgSelected(true);
  };
  return (
    <StOuterFrame>
      <StAddFormContainer>
        <h1>🏠 투게더 등록</h1>
        <StAddForm>
          <p>
            주소 <span>{position.address}</span>
          </p>
          <StCost>
            월세 <input type="number" /> 만원
          </StCost>
          <StGetherNum>
            게더 수 <input type="number" /> 게더
          </StGetherNum>
          <StEmail>
            이메일 <input type="text" />
          </StEmail>
          <StPassword>
            비밀번호 <input type="password" />
          </StPassword>
          <StImage>
            사진등록
            <label htmlFor="profileImg">
              {isImgSelected ? (
                <StImgSlelctedText>사진 1개 선택 완료</StImgSlelctedText>
              ) : (
                <span>+</span>
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              id="profileImg"
              onChange={addImgHandler}
            />
          </StImage>
          <StTitle>
            제목
            <input />
          </StTitle>
          <StContent placeholder="상세내용" />
          <StButtonContainer>
            <StCancelBtn>취소</StCancelBtn>
            <StAddBtn>등록</StAddBtn>
          </StButtonContainer>
        </StAddForm>
      </StAddFormContainer>
    </StOuterFrame>
  );
}

export default AddForm;

const StOuterFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  border: 1px solid red;
  /* overflow-y: scroll; */
`;

const StAddFormContainer = styled.div`
  background-color: #dfdfdf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
  padding: 40px 25px 50px 25px;
  max-width: 600px;
  /* min-width: 550px; */
  width: 100%;
  /* height: 100vh; */
  overflow-y: scroll;
  h1 {
    text-align: center;
    margin: 20px 20px 40px 20px;
    font-size: 2rem;
  }
`;

const StAddForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  p {
    background-color: white;
    height: 4.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 20px;
    color: gray;
  }
  p > input {
    background-color: transparent;
    border: none;
    /* border-bottom: 1px solid gray; */
    outline: none;
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  textarea {
    border: none;
  }
`;

const StButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 30px;
`;

const StCancelBtn = styled.button`
  background-color: #65c5b3;
  height: 70px;
  width: 50%;
`;

const StAddBtn = styled.button`
  background-color: #438984;
  height: 70px;
  width: 50%;
`;

const StCost = styled.p`
  input {
    color: red;
    min-width: 80%;
    text-align: right;
    /* &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #2c2c2c inset;
      -webkit-text-fill-color: #fff;
    } */
  }
`;

const StGetherNum = styled.p`
  input {
    color: red;
    min-width: 75%;
    text-align: right;
  }
`;

const StEmail = styled.p`
  input {
    min-width: 70%;
    text-align: right;
  }
`;

const StPassword = styled.p`
  input {
    color: red;
    min-width: 70%;
    text-align: right;
  }
`;

const StImage = styled.p`
  input {
    min-width: 50%;
    display: none;
  }
  label {
    color: #0095f6;
    font-size: 2rem;
    font-weight: 800;
    cursor: pointer;
  }
`;

const StTitle = styled.p`
  input {
    min-width: 80%;
    text-align: left;
  }
`;

const StContent = styled.textarea`
  text-align: left;
  height: 200px;
  outline: none;
  padding: 20px;
  resize: none;
`;

const StImgSlelctedText = styled.span`
  font-size: 1.5rem;
  font-weight: normal;
`;
