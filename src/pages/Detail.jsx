import React from 'react';
import styled from 'styled-components';
import DetailImage from '../components/DetailImage';
import DetailMenu from '../components/DetailMenu';
import DetailText from '../components/DetailText';
import DetailUrl from '../components/DetailUrl';

function Detail() {
  return (
    <DetailContainer>
      <DetailMenu></DetailMenu>
      <DetailImage></DetailImage>
      <DetailUrl></DetailUrl>
      <DetailText></DetailText>
    </DetailContainer>
  );
}

export default Detail;

const DetailContainer = styled.div`
  background-color: #c8c8c8;
  width: 96rem;
  height: 130.5rem;
  padding: 5.3rem;
`;
