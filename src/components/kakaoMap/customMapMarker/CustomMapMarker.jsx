import React from 'react';
import styled from 'styled-components';
import { useAddress } from '../../../hooks/useAddress';

const CustomMapMarker = ({ marker }) => {
  const { getAddress } = useAddress(marker);
  return (
    <Container>
      <div>위도: {marker.position.lat}</div>
      <div>경도: {marker.position.lng}</div>
      <div>주소: {getAddress}</div>
    </Container>
  );
};
export default CustomMapMarker;

const Container = styled.div`
  width: 30rem;
  height: 10rem;
`;
