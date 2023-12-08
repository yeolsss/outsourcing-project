import React from 'react';
import styled from 'styled-components';

function DetailUrl({ gether }) {
  const { cost, togetherNum, address } = gether;
  return (
    <StDetailUrlContainer>
      <StDetailCost>{cost}만원</StDetailCost>
      <StDetailTogetherNum>{togetherNum}명</StDetailTogetherNum>
      <StDetailRoadName>{address}</StDetailRoadName>
    </StDetailUrlContainer>
  );
}

export default DetailUrl;

const StDetailUrlContainer = styled.div`
  width: 59.8rem;
  height: 10.9rem;
  padding: 2rem;
  background-color: white;
  margin: 2rem 0rem;
`;
const StDetailCost = styled.div`
  font-size: 3rem;
  font-weight: bold;
  display: inline-block;
  margin-right: 1rem;
`;
const StDetailTogetherNum = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #248686;
  display: inline-block;
`;
const StDetailRoadName = styled.div`
  font-size: 2rem;
  margin-top: 2rem;
  font-weight: bolder;
`;
