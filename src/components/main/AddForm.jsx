import React from 'react';
import { styled } from 'styled-components';

function AddForm() {
  return (
    <StOuterFrame>
      <StAddFormContainer>
        <h1>투게더 등록하기</h1>
        <StAddForm>
          <p>주소: </p>
          <StCost>
            월세 <input type='number'/> 만원
          </StCost>
          <StGetherNum>게더 수 <input type='number'/> 게더</StGetherNum>
          <StEmail>이메일 <input type='text'/></StEmail>
          <StPassword>비밀번호 <input type='password'/></StPassword>
          <StImage>사진등록<input type='file'/></StImage>
          <StTitle>제목<input /></StTitle>
          <StContent placeholder='상세내용'/>
          <StButtonContainer>
            <StCancelBtn>취소</StCancelBtn>
            <StAddBtn>등록</StAddBtn>
          </StButtonContainer>
        </StAddForm>
      </StAddFormContainer>
    </StOuterFrame>
  )
}

export default AddForm

const StOuterFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;

const StAddFormContainer = styled.div`
  background-color: #dfdfdf;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 25px;
  max-width: 600px;
  /* min-width: 600px; */
    h1 {
      text-align: center;
      margin: 20px;
    }
`;



const StAddForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
    p {
      background-color: white;
      height: 4rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 20px 10px 20px;
    }
    p > input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid gray;
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
      padding: 5px 20px 5px 20px;
    }
`;

const StButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StCancelBtn = styled.button`
  background-color: #a2ff68;
`;

const StAddBtn = styled.button`
  background-color: #a2ff68;
`;

const StCost = styled.p`
  input {
    min-width: 65%;
    text-align: right;
    /* &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #2c2c2c inset;
      -webkit-text-fill-color: #fff;
    } */
  }
`;

const StGetherNum = styled.p`
  input {
    min-width: 65%;
    text-align: right;
  }
`;

const StEmail = styled.p`
  input {
    min-width: 70%;
    text-align: center;
  }
`;

const StPassword = styled.p`
  input {
    min-width: 70%;
    text-align: center;
  }
`;

const StImage = styled.p`
  input {
    min-width: 50%;
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
`;