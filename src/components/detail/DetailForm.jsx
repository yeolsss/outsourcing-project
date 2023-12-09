import { genderOptions } from 'common/util';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useInput } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPosition } from 'redux/module/position.slice';
import { styled } from 'styled-components';

function DetailForm({ together }) {
  const position = useSelector(selectPosition);

  const [isImgSelected, setIsImgSelected] = useState(false);
  const [imgPath, setImgPath] = useState(together.imgPath);
  const storage = getStorage();
  const togetherImgRef = useRef();

  const [addressValue, _, setAddress] = useInput(together.address);

  const [titleValue, handleTitle] = useInput(together.title);
  const titleRef = useRef(null);

  const [costValue, handleCost] = useInput(together.cost);
  const costRef = useRef(null);

  const [gender, handleGender] = useInput(together.gender);

  const [emailValue, handleEmail] = useInput(together.email);
  const emailRef = useRef(null);

  const [passwordValue, handlePassword] = useInput(together.password);
  const passwordRef = useRef(null);

  const [contentValue, handleContent] = useInput(together.content);
  const contentRef = useRef(null);

  const addImgHandler = async (e) => {
    try {
      const selectedImgFile = e.target.files[0];
      const selectedImgFilePath = `togetherImages/${selectedImgFile.name}`;
      const togetherImageRef = ref(storage, selectedImgFilePath);
      await uploadBytes(togetherImageRef, selectedImgFile);
      const downloadURL = await getDownloadURL(togetherImageRef);
      setImgPath(downloadURL);
      togetherImgRef.current.value = null;
    } catch (error) {
      console.error('이미지 업로드 에러', error);
    }
    setIsImgSelected(true);
  };

  useEffect(() => {
    setAddress(position.address);
  }, [position.address]);

  return (
    <StDetailForm>
      <StDetailUl>
        <li>
          <p>
            <span>주소</span>
            <span>{addressValue}</span>
          </p>
        </li>
        <li>
          <p>
            <span>월세</span>
            <Input
              inputType={'number'}
              inputValue={costValue}
              inputRef={costRef}
              handle={handleCost}
            />
          </p>
        </li>
        <li>
          <p>
            <span>전용선택</span>
            {genderOptions.map((option) => (
              <StLabel key={option.value}>
                {option.label}
                <StGenderInput
                  type="radio"
                  name="gender"
                  value={option.value}
                  checked={gender === option.value}
                  onChange={handleGender}
                />
              </StLabel>
            ))}
          </p>
        </li>
        <li>
          <p>
            <span>이메일</span>
            <Input
              inputType={'text'}
              inputValue={emailValue}
              inputRef={emailRef}
              handle={handleEmail}
            />
          </p>
        </li>
        <li>
          <p>
            <span>비밀번호</span>
            <Input
              inputType={'text'}
              inputValue={passwordValue}
              inputRef={passwordRef}
              handle={handlePassword}
            />
          </p>
        </li>
        <StImage>
          사진등록
          <label htmlFor="togetherImg">
            {isImgSelected ? (
              <StImgSelectedText>사진 1개 선택 완료</StImgSelectedText>
            ) : (
              <StImgSelectedText>사진 변경</StImgSelectedText>
            )}
          </label>
          <input
            type="file"
            accept="image/*"
            id="togetherImg"
            onChange={addImgHandler}
            ref={togetherImgRef}
          />
        </StImage>
        <li>
          <p>
            <span>제목</span>
            <Input
              inputType={'text'}
              inputValue={titleValue}
              inputRef={titleRef}
              handle={handleTitle}
            />
          </p>
        </li>
        <li>
          <StContent
            value={contentValue}
            ref={contentRef}
            onChange={handleContent}
            placeholder="상세내용"
          />
        </li>
      </StDetailUl>
    </StDetailForm>
  );
}

const Input = ({ inputType, inputValue, inputRef, handle }) => {
  return (
    <StInput
      type={inputType}
      value={inputValue}
      ref={inputRef}
      onChange={handle}
    />
  );
};

const StInput = styled.input`
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
`;

const StDetailForm = styled.form`
  box-shadow: inset 0 0 20px blue;
  width: 100%;
  height: auto;
`;

const StDetailUl = styled.ul`
  width: 80%;
  margin: 3rem auto 0;
  box-shadow: inset 0 0 20px green;
  padding: 2rem 2.5rem;
  font-size: 1.6rem;
`;

const StContent = styled.textarea`
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
`;
const StLabel = styled.label``;
const StGenderInput = styled.input``;

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

const StImgSelectedText = styled.span`
  font-size: 1.5rem;
  font-weight: normal;
`;

export default DetailForm;
