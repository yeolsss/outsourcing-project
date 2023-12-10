import { useRef, useState } from 'react';
// import { useMutation, useQueryClient } from 'react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTogetherToFireBase, deleteImagesInStorage } from 'api/togethers';
import {
  checkEmailValidation,
  checkValidation,
  genderOptions,
  getDate,
} from 'common/util';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useInput } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectPosition } from 'redux/module/position.slice';
import { styled } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { setTogethers } from '../../redux/module/together.slice';

function AddForm({ setIsAdding }) {
  const [isImgSelected, setIsImgSelected] = useState(false);
  const [imgInputValue, setImgInputValue] = useState(null);
  const [imgPath, setImgPath] = useState('');
  const [imgFileName, setImgFileName] = useState('');
  const [title, onChangeTitleHandler] = useInput('');
  const [content, onChangeContentHandler] = useInput('');
  const [cost, onChangeCost] = useInput('');
  const [togetherNum, onChangeTogetherNum] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [gender, setGender] = useState('noGenderRequirement');
  const position = useSelector(selectPosition);
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const [uuid, setUuid] = useState(uuidv4());

  const selectGenderHandler = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);
    console.log({ selectedGender });
  };

  const Mutation = useMutation({
    mutationFn: addTogetherToFireBase,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['togethers'] });
      alert('새 투게더가 등록되었습니다!');
      resetInputValues();
      dispatch(setTogethers());
      navigate(`/detail/${response}`);
    },
    onError: (error) => {
      console.error('새 투게더 데이터 추가 중 에러 발생:', error);
      alert(
        '알 수 없는 오류가 생겼습니다. 고객센터(02-123-4567)로 문의해주세요.',
      );
    },
  });

  const resetInputValues = () => {
    onChangeTitleHandler({ target: { value: '' } });
    onChangeContentHandler({ target: { value: '' } });
    onChangeCost({ target: { value: '' } });
    onChangeTogetherNum({ target: { value: '' } });
    onChangeEmail({ target: { value: '' } });
    onChangePassword({ target: { value: '' } });
    setGender('noGenderRequirement');
    setIsImgSelected(false);
  };

  const storage = getStorage();
  const togetherImgRef = useRef();
  // 이미지 추가 버튼 로직
  const addImgHandler = async (e) => {
    try {
      // 선택된 이미지 파일
      const selectedImgFile = e.target.files[0];
      setImgInputValue(selectedImgFile);
      console.log({ selectedImgFile });
      setImgFileName(selectedImgFile.name);
      // 선택된 이미지파일을 firebase storage에 추가
      const selectedImgFilePath = `togetherImages/${uuid}/${selectedImgFile.name}`;
      const togetherImageRef = ref(storage, selectedImgFilePath);
      await uploadBytes(togetherImageRef, selectedImgFile);
      // firebase storage에 업로드된 사진파일 경로
      const downloadURL = await getDownloadURL(togetherImageRef);
      console.log({ downloadURL });
      setImgPath(downloadURL);
      setImgInputValue(downloadURL);
      // 이미지 선택 input 초기화
      togetherImgRef.current.value = null;
    } catch (error) {
      console.error('이미지 업로드 에러', error);
    }
    setIsImgSelected(true);
  };

  // 새 투게더 등록 버튼 로직
  const submitNewTogetherHandler = async (e) => {
    e.preventDefault();

    const newTogether = {
      id: uuid,
      address: position.address,
      coordinates: { lat: position.lat, lng: position.lng },
      cost,
      togetherNum,
      createdAt: getDate(),
      email,
      gender,
      imgPath: imgPath,
      isDone: false,
      password,
      title,
      content,
      imgFileName,
    };

    // 유효성 검사
    if (
      !cost ||
      !gender ||
      !togetherNum ||
      !email ||
      !password ||
      !imgPath ||
      !title ||
      !content
    ) {
      return alert('입력하지 않은 곳이 있습니다.');
    } else if (
      checkValidation('월세', cost, 6) &&
      checkValidation('모집인원 수', togetherNum, 3) &&
      checkEmailValidation(email) &&
      checkValidation('비밀번호', password, 10) &&
      checkValidation('제목', title, 30) &&
      checkValidation('내용', content, 500)
    ) {
      if (window.confirm('새 투게더를 등록하시겠습니까?')) {
        Mutation.mutate(newTogether);
      }
    }
  };

  return (
    <StOuterFrame>
      <StAddFormContainer>
        <h1>🏠 투게더 등록</h1>
        <StAddForm onSubmit={submitNewTogetherHandler}>
          <p>
            <StInputTitle>주소</StInputTitle>
            <span>{position.address}</span>
          </p>
          <StCost>
            <StInputTitle>월세</StInputTitle>
            <input value={cost} onChange={onChangeCost} type="number" /> 만원
          </StCost>
          <StGender>
            <StInputTitle>전용선택</StInputTitle>
            {genderOptions.map((option) => (
              <StLabel key={option.value}>
                {option.label}
                <StGenderInput
                  type="radio"
                  name="gender"
                  value={option.value}
                  checked={gender === option.value}
                  onChange={selectGenderHandler}
                />
              </StLabel>
            ))}
          </StGender>
          <StGetherNum>
            <StInputTitle>모집인원</StInputTitle>
            <input
              value={togetherNum}
              onChange={onChangeTogetherNum}
              type="number"
            />{' '}
            명
          </StGetherNum>
          <StEmail>
            <StInputTitle>이메일</StInputTitle>
            <input value={email} onChange={onChangeEmail} type="text" />
          </StEmail>
          <StPassword>
            <StInputTitle>비밀번호</StInputTitle>{' '}
            <input
              value={password}
              onChange={onChangePassword}
              type="password"
            />
          </StPassword>
          <StImage>
            <StInputTitle>사진등록</StInputTitle>
            <label htmlFor="togetherImg">
              {isImgSelected ? (
                <StImgSlelctedText>사진 1개 선택 완료</StImgSlelctedText>
              ) : (
                <span>➕</span>
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
          <StTitle>
            <StInputTitle placeholder="제목을 입력해주세요.">제목</StInputTitle>
            <input value={title} onChange={onChangeTitleHandler} />
          </StTitle>
          <StContent
            value={content}
            onChange={onChangeContentHandler}
            placeholder="상세내용"
          />
          <StButtonContainer>
            <StCancelBtn
              onClick={async () => {
                console.log(imgFileName);
                console.log(!imgFileName);
                if (!!imgFileName) {
                  const deleteImgPath = `${uuid}/${imgFileName}`;
                  await deleteImagesInStorage(deleteImgPath);
                }
                navigate('/');
              }}
              type="button"
            >
              취소
            </StCancelBtn>
            <StAddBtn type="submit">등록</StAddBtn>
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
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: white;
  padding-top: 28rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #19685b;
    border-radius: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background: #e6e6e6;
  }
`;

const StInputTitle = styled.span`
  background-color: var(--accent);
  color: white;
  height: 2.5rem;
  width: 6rem;
  text-align: center;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StAddFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
  padding: 40px 25px 50px 25px;
  max-width: 600px;
  /* min-width: 550px; */
  width: 100%;
  color: var(--darkgreen);
  /* height: 100vh; */

  h1 {
    text-align: center;
    margin: 20px 0 40px 0;
    font-size: 2.3rem;
    background-color: var(--accent);
    color: white;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
  }
`;

const StAddForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  p {
    height: 4.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 20px;
    color: var(--darkgreen);
    border-bottom: solid 0.1rem var(--lightgray);
  }
  p > input {
    background-color: transparent;
    border: none;
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
    background-color: #f4f4f4;
  }
`;

const StButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 30px;
`;

const StCancelBtn = styled.button`
  background-color: #7cd6bb;
  height: 70px;
  width: 50%;
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: 0.25s ease-in-out;
  &:hover {
    background-color: var(--secondary);
  }
`;

const StAddBtn = styled.button`
  background-color: var(--accent);
  height: 70px;
  width: 50%;
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: 0.25s ease-in-out;
  &:hover {
    background-color: var(--secondary);
  }
`;

const StCost = styled.p`
  input {
    color: red;
    min-width: 80%;
    text-align: right;
    font-weight: 600;
  }
`;

const StGetherNum = styled.p`
  input {
    color: red;
    min-width: 75%;
    text-align: right;
    font-weight: 600;
  }
`;

const StGender = styled.p``;
const StLabel = styled.label``;
const StGenderInput = styled.input``;

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
