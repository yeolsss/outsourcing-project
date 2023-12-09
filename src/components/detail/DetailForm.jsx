import { styled } from 'styled-components';

export const DetailForm = ({ together }) => {
  console.log(together);
  const {
    address,
    content,
    coordinates,
    cost,
    createdAt,
    email,
    gender,
    id,
    imgPath,
    isDone,
    password,
    title,
    togetherNum,
  } = together;

  const getGenderText = (paramGender) => {
    switch (paramGender) {
      case 'manOnly':
        return '남자만';
      case 'womanOnly':
        return '여자만';
      default:
        return '무관';
    }
  };
  return (
    <StDetailMain>
      <ul>
        <li>
          <span>주소</span>
          <span>{address}</span>
        </li>
        <li>
          <span>이메일</span>
          <span>{email}</span>
        </li>
        <li>
          <span>월세</span>
          <span>{cost} 만원</span>
        </li>
        <li>
          <span>성별</span>
          <span>{getGenderText(gender)}</span>
        </li>
        <li>
          <span>모집인원</span>
          <span>{togetherNum} 명</span>
        </li>

        <li>
          <p>{content}</p>
        </li>
      </ul>
    </StDetailMain>
  );
};

const StDetailMain = styled.div``;
