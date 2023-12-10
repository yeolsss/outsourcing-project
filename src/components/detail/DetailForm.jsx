import {
  checkEmailValidation,
  checkValidation,
  genderOptions,
} from 'common/util';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useInput } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosition } from 'redux/module/position.slice';
import { styled } from 'styled-components';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  deleteImagesInStorage,
  updateTogetherToFireBase,
} from '../../api/togethers';
import { setUpdate } from '../../redux/module/detailStatus.slice';
import { useCustomConfirm } from '../../hooks/useCustomConfirm';

function DetailForm({ docId, together, setIsUpdate }) {
  const { mutate: updateMutate } = useMutation({
    mutationFn: updateTogetherToFireBase,
  });
  const queryClient = useQueryClient();
  const { handleOpenModal } = useCustomConfirm();

  const position = useSelector(selectPosition);
  const dispatch = useDispatch();

  const [isImgSelected, setIsImgSelected] = useState(false);
  const [imgPath, setImgPath] = useState(together.imgPath);
  const [imgFileName, setImgFileName] = useState(together.imgFileName);
  const storage = getStorage();
  const togetherImgRef = useRef();

  const [addressValue, _, setAddress] = useInput(together.address);

  const [titleValue, handleTitle] = useInput(together.title);
  const titleRef = useRef(null);

  const [costValue, handleCost] = useInput(together.cost);
  const costRef = useRef(null);

  const [gender, handleGender] = useInput(together.gender);

  const [togetherNumValue, handleTogetherNumValue] = useInput(
    together.togetherNum,
  );
  const togetherNumRef = useRef(null);

  const [emailValue, handleEmail] = useInput(together.email);
  const emailRef = useRef(null);

  const [passwordValue, handlePassword] = useInput(together.password);
  const passwordRef = useRef(null);

  const [contentValue, handleContent] = useInput(together.content);
  const contentRef = useRef(null);

  const addImgHandler = async (e) => {
    try {
      const selectedImgFile = e.target.files[0];
      setImgFileName(selectedImgFile.name);
      const selectedImgFilePath = `togetherImages/${together.id}/${selectedImgFile.name}`;
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

  const handleOnSubmitUpdateTogether = async (e) => {
    e.preventDefault();
    if (
      checkValidation('월세', costValue, 6) &&
      checkValidation('모집인원 수', togetherNumValue, 3) &&
      checkEmailValidation(emailValue) &&
      checkValidation('비밀번호', passwordValue, 10) &&
      checkValidation('제목', titleValue, 30) &&
      checkValidation('내용', contentValue, 500)
    ) {
      // if (window.confirm('투게더를 수정하시겠습니까?')) {
      if (await handleOpenModal('투게더를 수정하시겠습니까?')) {
        let updateTogether = {
          address: addressValue,
          cost: costValue,
          togetherNum: togetherNumValue,
          email: emailValue,
          password: passwordValue,
          title: titleValue,
          content: contentValue,
          gender: gender,
          imgPath,
          coordinates: { lat: position.lat, lng: position.lng },
          imgFileName,
        };
        updateMutate(
          { docId, updateTogether },
          {
            onSuccess: async () => {
              if (together.imgFileName !== imgFileName) {
                const deleteImgPath = `${together.id}/${together.imgFileName}`;
                await deleteImagesInStorage(deleteImgPath);
              }

              queryClient.invalidateQueries({ queryKey: ['togethers'] });
              alert('수정이 완료되었습니다.');
              dispatch(setUpdate(false));
            },
            onError: () => {},
          },
        );
      }
    }
  };

  useEffect(() => {
    setAddress(position.address);
  }, [position.address]);

  return (
    <StDetailForm onSubmit={handleOnSubmitUpdateTogether}>
      <StTitle>🏠 투게더 수정</StTitle>
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
            <span>모집인원</span>
            <Input
              inputType={'text'}
              inputValue={togetherNumValue}
              inputRef={togetherNumRef}
              handle={handleTogetherNumValue}
            />
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
              inputType={'password'}
              inputValue={passwordValue}
              inputRef={passwordRef}
              handle={handlePassword}
            />
          </p>
        </li>
        <li>
          <StImage>
            <span>사진등록</span>
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
        </li>
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
        <StContentLi>
          <StContent
            value={contentValue}
            ref={contentRef}
            onChange={handleContent}
            placeholder="상세내용"
          />
        </StContentLi>
        <StDetailButtonWrapper>
          <button type={'button'} onClick={() => dispatch(setUpdate(false))}>
            수정 취소
          </button>
          <button type={'submit'}>수정 완료</button>
        </StDetailButtonWrapper>
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
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StTitle = styled.h1`
  width: 80%;
  font-size: 2.4rem;
  text-align: center;
  margin: 6rem auto 2rem;
  background-color: var(--accent);
  padding: 2rem 0;
  border-radius: 1rem;
  color: white;
`;

const StDetailForm = styled.form`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const StDetailUl = styled.ul`
  width: 80%;
  margin: 3rem auto 0;
  padding: 2.5rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  > li {
    background-color: white;
    height: 4.5rem;
    padding: 0 1rem;
    border-bottom: 1px solid var(--lightgray);
  }
  > li > p {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > li > p > input {
    padding: 0.5rem 1rem;
    text-align: right;
  }
  > li > p > span:first-child {
    color: white;
    width: 6.5rem;
    padding: 0.5rem 0;
    background-color: var(--accent);
    border-radius: 0.5rem;
    text-align: center;
  }
`;
const StContentLi = styled.li`
  height: 20rem !important;
  border: none !important;
  padding: unset !important;
`;
const StContent = styled.textarea`
  outline: unset;
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  background-color: #f4f4f4;
  padding: 2rem;
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

const StDetailButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  > button {
    background-color: var(--accent);
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    width: 24.2rem;
    padding: 2.5rem 0;
    border-radius: 0.5rem;

    &:hover {
      background-color: var(--secondary);
    }
  }
  > button:first-child {
    background-color: #7cd6bb;
    &:hover {
      background-color: var(--secondary);
    }
  }
`;

export default DetailForm;
