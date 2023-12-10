import { styled } from 'styled-components';
import { getGenderText } from '../../common/util';

const DetailData = ({ together }) => {
  const { address, content, cost, createdAt, email, gender, togetherNum } =
    together;

  return (
    <StDetailMain>
      <StDetailUl>
        <li>
          <span>{createdAt}</span>
        </li>
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2rem 2.5rem;
  border-radius: 0.5rem;
  transition: box-shadow 0.2s ease-in;
  &:hover {
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.3);
  }

  > li {
    display: flex;
    column-gap: 2rem;
    color: #000;
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
  > li:first-child > span {
    display: block;
    font-size: 1.5rem;
    text-align: right;
    font-weight: bold;
  }
`;
