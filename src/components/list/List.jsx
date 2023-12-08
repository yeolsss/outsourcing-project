import styled from 'styled-components';
import defaultImg from '../../assets/defaultImg.png';

function List({ list }) {
  return (
    <>
      {list.map((element, index) => {
        return (
          <StLi key={index}>
            {/* Link올것이니.. */}
            <a>
              <StContentImg>
                <StImg
                  src={element.imgPath || defaultImg}
                  alt={element.title}
                />
              </StContentImg>
              <StContentWrap>
                <StTitle>{element.title}</StTitle>
                <StContent>{element.content}</StContent>
                <StAddress>{element.address}</StAddress>
              </StContentWrap>
            </a>
          </StLi>
        );
      })}
    </>
  );
}

export default List;

const StLi = styled.li`
  margin: 0.8rem;
`;

const StContentImg = styled.div`
  position: relative;
  border-radius: 0.6rem;
  height: 16rem;
  overflow: hidden;
  box-sizing: border-box;
`;

const StImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StContentWrap = styled.div`
  padding: 1rem;
`;

const StTitle = styled.h3`
  font-size: 2.4rem;
`;

const StContent = styled.p`
  font-size: 1.4rem;
  line-height: 2;
`;

const StAddress = styled.p`
  font-size: 1.4rem;
`;
