import React from 'react';
import styled from 'styled-components';

function DetailText() {
  return <StDetailText>확인용 텍스트</StDetailText>;
}

export default DetailText;

const StDetailText = styled.div`
  padding: 2rem;
  width: 59.8rem;
  height: 33.5rem;
  background-color: white;
  font-size: 3rem;
  font-weight: bold;
`;
