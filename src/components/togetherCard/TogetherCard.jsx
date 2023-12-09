import styled from 'styled-components';
import defaultImg from '../../assets/defaultImg.png';
import { Link } from 'react-router-dom';
import React from 'react';

function TogetherCard({ together }) {
  return (
    <>
      <Link to={`/detail/${together.docId}`}>
        <StContentImg>
          <StImg src={together.imgPath || defaultImg} alt={together.title} />
        </StContentImg>
        <StContentWrap>
          <StTitle>{together.title}</StTitle>
          <StContent>{together.content}</StContent>
          <StAddress>{together.address}</StAddress>
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
