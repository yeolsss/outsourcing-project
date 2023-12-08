import React from 'react';
import styled from 'styled-components';
import DetailMenu from '../components/DetailMenu';
import DetailImage from '../components/DetailImage';
import DetailUrl from '../components/DetailUrl';
import DetailText from '../components/DetailText';

function Detail() {
  return (
    <DetailContainer>
      <DetailMenu />
      <DetailImage />
      <DetailUrl />
      <DetailText />
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
