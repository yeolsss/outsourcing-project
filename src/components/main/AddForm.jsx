import React, { useState } from 'react';
// import { useMutation, useQueryClient } from 'react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { addTogether } from '../../api/togethers';
import UseCheckValidation from '../../hooks/UseCheckValidation';
import UseInput from '../../hooks/UseInput';
import { selectPosition } from '../../redux/module/position.slice';
// import { useQuery } from '@tanstack/react-query';

function AddForm({ setIsAdding }) {
  const [isImgSelected, setIsImgSelected] = useState(false);
  const [imgPath, setImgPath] = useState('');
  const [title, onChangeTitleHandler] = UseInput();
  const [content, onChangeContentHandler] = UseInput();
  const [cost, onChangeCost] = UseInput();
  const [togetherNum, onChangeTogetherNum] = UseInput();
  const [email, onChangeEmail] = UseInput();
  const [password, onChangePassword] = UseInput();
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
      queryClient.invalidateQueries(['togethers']);
      alert('새 투게더가 등록되었습니다!');
      resetInputValues();
      console.log('mutation성공!!!!!!');
    },
    onError: (error) => {
      console.error('데이터 추가 에러:', error);
      alert('새 투게더 추가 중 오류가 발생했습니다.');
    },
  });

  // 이미지 추가 버튼 로직
  const addImgHandler = (e) => {
    // setImgPath(e.target.files[0]);
    setImgPath(e.target.files[0].name);
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
      createdAt: '임의 새 생성시간',
      email,
      gender: 'M or F',
      imgPath,
      isDone: false,
      password,
      title,
      content,
    };

    // 유효성 검사
    if (!cost || !togetherNum || !email || !password || !title || !content) {
      return alert('입력하지 않은 곳이 있습니다.');
    } else if (
      UseCheckValidation('월세', cost, 6) &&
      UseCheckValidation('모집인원 수', togetherNum, 3) &&
      UseCheckValidation('이메일', email, 20) &&
      UseCheckValidation('비밀번호', password, 5) &&
      UseCheckValidation('제목', title, 30) &&
      UseCheckValidation('내용', content, 500)
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
