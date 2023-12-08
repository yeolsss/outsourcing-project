import React from 'react';
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
                <h3>{element.title}</h3>
                <p>{element.content}</p>
                <p>{element.address}</p>
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
  height: 60%;
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
