import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectPosition } from '../../../redux/module/position.slice';

const CustomMapMarker = () => {
  const { payload } = useSelector(selectPosition);
  return (
    <Container>
      <div>위도: {payload.lat}</div>
      <div>경도: {payload.lng}</div>
      <div>주소: {payload.address}</div>
    </Container>
  );
};
export default CustomMapMarker;

const Container = styled.div`
  width: 30rem;
  height: 10rem;
`;
