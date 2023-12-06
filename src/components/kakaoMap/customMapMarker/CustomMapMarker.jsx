import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectPosition } from '../../../redux/module/position.slice';

const CustomMapMarker = () => {
  const { lat, lng, address } = useSelector(selectPosition);
  return (
    <Container>
      <div>위도: {lat}</div>
      <div>경도: {lng}</div>
      <div>주소: {address}</div>
    </Container>
  );
};
export default CustomMapMarker;

const Container = styled.div`
  width: 30rem;
  height: 10rem;
`;
