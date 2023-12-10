import { styled } from 'styled-components';

const DetailData = ({ together }) => {
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
      <StDetailUl>
        <li>
          <span>주소</span>
          <span>{address}</span>
        </li>
        <li>
          <span>성별</span>
          <span>{getGenderText(gender)}</span>
        </li>
        <li>
          <span>월세</span>
          <span>{cost} 만원</span>
        </li>
        <li>
          <span>이메일</span>
          <span>{email}</span>
        </li>
        <li>
          <span>모집인원</span>
          <span>{togetherNum} 명</span>
        </li>
        <li>
          <p>{content}</p>
        </li>
      </StDetailUl>
    </StDetailMain>
  );
};

export default DetailData;

const StDetailMain = styled.div`
  width: 100%;
  height: auto;
`;

const StDetailUl = styled.ul`
  width: 100%;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2rem 2.5rem;
  border-radius: 0.5rem;
  background-color: var(--accent);
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.3);
  > li {
    display: flex;
    column-gap: 2rem;
    color: #fff;
    span:first-child {
      font-weight: bold;
      flex: 1;
    }
    span:last-child {
      flex: 3;
    }
    span,
    p {
      font-size: 2.4rem;
      letter-spacing: 0.03rem;
      line-height: 1.3;
    }
  }
`;
