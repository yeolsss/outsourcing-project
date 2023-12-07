import React from 'react';
import styled from 'styled-components';

function List({ list }) {
  return (
    <>
      {list.map((element, index) => {
        return (
          <StLi key={index}>
            <a>
              <div>
                <StImg src={element.imgPath} alt={element.title} />
              </div>
              <StContentWrap>
                <h3>{element.title}</h3>
                <p>{element.content}</p>
                <p>{element.createdAt}</p>
                <p>
                  <span>{element.togetherNum}</span>게더..?
                </p>
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
  margin: 0.4rem;
`;

const StImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StContentWrap = styled.div`
  padding: 1rem;
`;
