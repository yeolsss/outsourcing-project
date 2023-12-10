import { Link } from 'react-router-dom';
import styled from 'styled-components';
import defaultImg from '../../assets/defaultImg.png';

function TogetherCard({ together }) {
  if (together.gender.womanOnly) return '여성전용';
  if (together.gender.manOnly) return '남성전용';
  if (together.gender.noGenderRequirement) return '공동';

  return (
    <>
      <Link to={`/detail/${together.docId}`}>
        <StContentImg>
          <StImg src={together.imgPath || defaultImg} alt={together.title} />
        </StContentImg>
        <StContentWrap>
          <StFirstLine>
            {together.cost} 만원
            <StTogetherOption>
              <StTogetherNum>{together.togetherNum} 명</StTogetherNum>
              <StGender gender={together.gender}>
                {together.gender === 'womanOnly' && '여성전용'}
                {together.gender === 'manOnly' && '남성전용'}
                {together.gender === 'noGenderRequirement' && '공동'}
              </StGender>
            </StTogetherOption>
          </StFirstLine>
          <StSecondLine>
            <StAddress>{together.address}</StAddress>
            <StTitleAndContent>
              {together.title}&nbsp;
              {together.content}
            </StTitleAndContent>
            {/* <StContent></StContent> */}
          </StSecondLine>
        </StContentWrap>
      </Link>
    </>
  );
}

export default TogetherCard;

const StContentImg = styled.div`
  position: relative;
  border-radius: 0.6rem;
  height: 16rem;
  overflow: hidden;
  box-sizing: border-box;
  transition: box-shadow 0.25s ease-in-out;
  &:hover {
    box-shadow:
      8px 0 12px -5px gray,
      -8px 0 12px -5px gray;
    /* box-shadow:
      0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  }
`;

const StImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StContentWrap = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StFirstLine = styled.h3`
  font-size: 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StTogetherOption = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
`;

const StTogetherNum = styled.span`
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
`;

const StGender = styled.span`
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
    switch (gender) {
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
`;

const StTitleAndContent = styled.span`
  font-size: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StSecondLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
`;

// const StContent = styled.span`
//   font-size: 1.4rem;
//   line-height: 2;
// `;

const StAddress = styled.p`
  font-size: 1.4rem;
  margin-top: 0.5rem;
`;
