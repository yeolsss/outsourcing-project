import { styled } from 'styled-components';
import { getGenderText } from '../../common/util';

const DetailData = ({ together }) => {
  const { address, content, cost, createdAt, email, gender, togetherNum } =
    together;

  return (
    <StDetailMain>
      <StDetailUl $gender={gender}>
        <li>
          <div>
            <span>{togetherNum} 명</span>
            <span>{getGenderText(gender)}</span>
          </div>
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

    > span:first-child {
      font-weight: bold;
      flex: 1;
    }
    > span:last-child {
      flex: 3;
    }
    > span,
    > p {
      font-size: 2.4rem;
      letter-spacing: 0.03rem;
      line-height: 1.3;
      white-space: pre-line;
    }
  }
  > li:first-child > span {
    display: block;
    font-size: 1.5rem;
    text-align: right;
    font-weight: bold;
  }
  > li > div {
    display: flex;
    align-items: center;
    width: 35%;
    column-gap: 1rem;
  }
  > li > div > span {
    width: 5rem;
    font-size: 1.2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 1rem;
  }
  > li > div > span:first-child {
    background-color: #926753;
  }
  > li > div > span:last-child {
    width: 6.5rem;
    ${({ $gender }) => {
      console.log($gender);
      switch ($gender) {
        case 'womanOnly':
          return `background-color: #FD5E53`; /* 여성전용일 때의 색상으로 변경 */
        case 'manOnly':
          return `background-color: var(--accent);`; /* 남성전용일 때의 색상으로 변경 */
        case 'noGenderRequirement':
          return `background-color: #a0a0a0;`; /* 공동일 때의 색상으로 변경 */
        default:
          return ''; /* 기본값: 아무 스타일도 적용하지 않음 */
      }
    }}
  }
`;
