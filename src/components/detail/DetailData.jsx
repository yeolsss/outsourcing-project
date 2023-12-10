import { styled } from 'styled-components';
import { getGenderText } from '../../common/util';
import { DetailTitle } from './DetailTitle';

const DetailData = ({ together }) => {
  const {
    title,
    address,
    content,
    cost,
    createdAt,
    email,
    gender,
    togetherNum,
  } = together;

  return (
    <StDetailMain>
      <StDetailUl $gender={gender}>
        <StCost>
          <span>월세 / {cost} 만원</span>
        </StCost>
        <StAddress>
          <span>{address}</span>
        </StAddress>
        <StGenderAndDate>
          <div>
            <span>Together Only</span>
            <span>{togetherNum} 명</span>
            <span gender={gender}>{getGenderText(gender)}</span>
          </div>
          <StDate>Added on / {createdAt}</StDate>
        </StGenderAndDate>
        <StTitle>
          <DetailTitle title={title} />
        </StTitle>
        <StContent>
          <p>{content}</p>
        </StContent>
        <StEmail>
          <p>입주신청을 눌러 미래의 룸메이트에게 메일을 보내보세요!</p>
          <p>posted by {email}</p>
        </StEmail>
      </StDetailUl>
    </StDetailMain>
  );
};

export default DetailData;

const StDetailMain = styled.div`
  width: 100%;
  height: auto;
`;
const StGenderAndDate = styled.li`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--lightgray);
  width: 100%;
  div {
    display: flex;
    flex: row;
    gap: 1rem;
    > span:nth-child(3) {
      font-size: 1.2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      margin-bottom: 0.5rem;
      color: white;
      width: 6.5rem;
      height: 1.9rem;
      border-radius: 8px;
      background-color: var(--primary); /* 기본 색상: primary 색상 사용 예시 */

      ${({ gender }) => {
        console.log({ gender });
        switch (gender) {
          case 'womanOnly':
            return `background-color: #FD5E53;`;
          case 'manOnly':
            return `background-color: var(--accent);`;
          case 'noGenderRequirement':
            return `background-color: #a0a0a0;`;
          default:
            return '';
        }
      }}
    }

    > span:nth-child(2) {
      font-size: 1.2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 1rem 0.5rem;
      background-color: #926753;
      color: white;
      width: 5rem;
      height: 1.9rem;
      border-radius: 8px;
      margin-bottom: 0.5rem;
    }

    > span:nth-child(1) {
      font-size: 1.2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 1rem 0.5rem;
      background-color: var(--primary);
      color: white;
      width: 9rem;
      height: 1.9rem;
      border-radius: 8px;
      margin-bottom: 0.5rem;
    }
  }
`;

const StDate = styled.span`
  font-size: 1.3rem;
  color: gray;
  margin-right: 0.2rem;
`;

const StAddress = styled.li`
  display: flex;
  text-align: start;
  > span {
    font-size: 1.5rem;
    padding-left: 0.1rem;
    margin-top: 0.1rem;
  }
`;

const StTitle = styled.li``;

const StCost = styled.li`
  display: flex;
  text-align: start;
  > span {
    font-size: 2.5rem;
  }
`;

const StEmail = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0.5rem 2rem 0.5rem;
  > p {
    font-size: 1.5rem;
  }
  > p:nth-child(2) {
    color: gray;
    margin-top: 1rem;
    margin-right: 1rem;
    font-size: 1.3rem;
  }
`;

const StContent = styled.li`
  font-size: 1.5rem;
  padding: 0.5rem 0.5rem 2rem 0.5rem;
  max-height: 22rem;
  border-bottom: 1px solid var(--lightgray);
`;

const StDetailUl = styled.ul`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
