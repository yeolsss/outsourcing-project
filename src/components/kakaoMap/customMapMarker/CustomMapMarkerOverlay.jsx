import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAddress } from 'common/mapUtil';

const CustomMapMarkerOverlay = ({ title = '', position }) => {
  const [address, setAddress] = useState();

  useEffect(() => {
    (async () => {
      setAddress((await getAddress(position)) || '주소를 찾을 수 없습니다.');
    })();
  }, [position]);

  return (
    <StContainer>
      {title && (
        <>
          <li>
            <StTitle>{title}</StTitle>
          </li>
          <li>
            <StCost>모집인원: 3명</StCost>
          </li>
          <li>
            <StCost>월세: 50만원</StCost>
          </li>
        </>
      )}

      <li>
        <StAddress>주소: {address}</StAddress>
      </li>
    </StContainer>
  );
};
export default CustomMapMarkerOverlay;

const StContainer = styled.ul`
  width: 20rem;
  height: 10rem;
  border-radius: 0.5rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  row-gap: 0.5rem;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StTitle = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StAddress = styled.span`
  font-size: 1.6rem;
`;

const StCost = styled.span`
  font-size: 1.6rem;
`;
