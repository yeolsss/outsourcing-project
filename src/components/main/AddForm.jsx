import React, { useRef, useState } from 'react';
// import { useMutation, useQueryClient } from 'react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { addTogether } from '../../api/togethers';
import { checkValidation, getDate } from '../../common/util';
import { useInput } from '../../hooks';
import { selectPosition } from '../../redux/module/position.slice';

function AddForm({ setIsAdding }) {
  const [isImgSelected, setIsImgSelected] = useState(false);
  const [imgInputValue, setImgInputValue] = useState(null);
  const [imgPath, setImgPath] = useState('');
  const [title, onChangeTitleHandler] = useInput('');
  const [content, onChangeContentHandler] = useInput('');
  const [cost, onChangeCost] = useInput('');
  const [togetherNum, onChangeTogetherNum] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const position = useSelector(selectPosition);
  console.log('현재 활성화되어 있는 투게더의 position', position);

  const queryClient = useQueryClient();

  // const { isLoading, isError, data } = useQuery('togethers', getTogethers);

  const resetInputValues = () => {
    onChangeTitleHandler({ target: { value: '' } });
    onChangeContentHandler({ target: { value: '' } });
    onChangeCost({ target: { value: '' } });
    onChangeTogetherNum({ target: { value: '' } });
    onChangeEmail({ target: { value: '' } });
    onChangePassword({ target: { value: '' } });
    setIsImgSelected(false);
  };

  const Mutation = useMutation({
    mutationFn: addTogether,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['togethers'] });
      alert('새 투게더가 등록되었습니다!');
      resetInputValues();
      console.log('mutation성공!!!!!!');
    },
    onError: (error) => {
      console.error('데이터 추가 에러:', error);
      alert('새 투게더 추가 중 오류가 발생했습니다.');
    },
  });
  const storage = getStorage();
  const togetherImgRef = useRef();
  // 이미지 추가 버튼 로직!
  const addImgHandler = async (e) => {
    try {
      // 1. 만약 이미지를 선택 후 '열기'를 누르면
      const selectedImgFile = e.target.files[0]; // 선택된 이미지 파일
      // 이미지를 선택하지 않은 경우 처리
      // if (!selectedImgFile) {
      //   return;
      // }
      setImgInputValue(selectedImgFile); // 사진입력창에 대한 입력값으로 state저장
      console.log({ selectedImgFile });
      // 2. UI : 사진 1개 선택됨 랜더링, Logic: 선택된 이미지파일을 storage에 추가
      const selectedImgFilePath = `togetherImages/${selectedImgFile.name}`;
      const togetherImageRef = ref(storage, selectedImgFilePath);
      await uploadBytes(togetherImageRef, selectedImgFile);
      const downloadURL = await getDownloadURL(togetherImageRef);
      console.log({ downloadURL });
      setImgPath(downloadURL);
      setImgInputValue(downloadURL);
      togetherImgRef.current.value = null; // 이미지 선택 input 초기화
    } catch (error) {
      console.error('이미지 업로드 에러', error);
    }
    // 3. storage에 추가된 이미지의 url을 반환
    // 4. 'submitNewTogetherHandler' 로직에 newTogether 의 imPath의 value 값에 3번 반환값 넣기
    // 5. 입력값을 모두 모아 mutation에 저장한다(이 부분은 이미 로직완성되었으니 1~4만 하면됨)
    // setImgPath(e.target.files[0]);
    // setImgPath(e.target.files[0].name);
    setIsImgSelected(true);
  };

  // 새 투게더 등록 버튼 로직
  const submitNewTogetherHandler = async (e) => {
    e.preventDefault();

    const newTogether = {
      id: '임의 아이디 1',
      address: position.address,
      coordinates: { lat: position.lat, lng: position.lng },
      cost,
      togetherNum,
      createdAt: getDate(),
      email,
      gender: 'M or F',
      imgPath: imgPath,
      isDone: false,
      password,
      title,
      content,
    };

    // 유효성 검사
    if (!cost || !togetherNum || !email || !password || !title || !content) {
      return alert('입력하지 않은 곳이 있습니다.');
    } else if (
      checkValidation('월세', cost, 6) &&
      checkValidation('모집인원 수', togetherNum, 3) &&
      checkValidation('이메일', email, 20) &&
      checkValidation('비밀번호', password, 5) &&
      checkValidation('제목', title, 30) &&
      checkValidation('내용', content, 500)
    ) {
      if (window.confirm('새 투게더를 등록하시겠습니까?')) {
        Mutation.mutate(newTogether);
        setIsAdding(false);
      }
    }

    // try {
    //   console.log('storage', storage); //undefined
    //   const storageRef = ref(storage);
    //   const imagesRef = ref(storage, 'images');
    //   const fileRef = ref(storageRef, imgPath.name);

    //   await uploadBytes(fileRef, imgPath);

    //   const downloadURL = await getDownloadURL(fileRef);
    //   setImgPath(downloadURL);

    //   uploadBytes(imgPath, file).then((snapshot) => {
    //     console.log('uploaded a blog or file!');
    //   });
    //   uploadBytes();
    //   const imageRef = storage.ref();
    //   const fileRef = imageRef.child(imgPath);
    //   await fileRef.put(imgPath);

    //   const downloadURL = await fileRef.getDownloadURL();
    //   setImgPath(downloadURL);
    //   alert('파일 업로드가 완료되었습니다.');
    // } catch (error) {
    //   console.error('파일 업로드 에러', error);
    //   alert('파일 업로드 중 에러발생');
    // }
    // const imageRef = ref(storage, 'folder/file');
    // uploadBytes(imageRef, imgPath);
  };
  return (
    <StOuterFrame>
      <StAddFormContainer>
        <h1>🏠 투게더 등록</h1>
        <StAddForm onSubmit={submitNewTogetherHandler}>
          <p>
            주소 <span>{position.address}</span>
          </p>
          <StCost>
            월세
            <input value={cost} onChange={onChangeCost} type="number" /> 만원
          </StCost>
          <StGetherNum>
            모집인원
            <input
              value={togetherNum}
              onChange={onChangeTogetherNum}
              type="number"
            />{' '}
            명
          </StGetherNum>
          <StEmail>
            이메일 <input value={email} onChange={onChangeEmail} type="text" />
          </StEmail>
          <StPassword>
            비밀번호{' '}
            <input
              value={password}
              onChange={onChangePassword}
              type="password"
            />
          </StPassword>
          <StImage>
            사진등록
            <label htmlFor="togetherImg">
              {isImgSelected ? (
                <StImgSlelctedText>사진 1개 선택 완료</StImgSlelctedText>
              ) : (
                <span>+</span>
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
            제목
            <input value={title} onChange={onChangeTitleHandler} />
          </StTitle>
          <StContent
            value={content}
            onChange={onChangeContentHandler}
            placeholder="상세내용"
          />
          <StButtonContainer>
            <StCancelBtn onClick={() => setIsAdding(false)} type="button">
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
