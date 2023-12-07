import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectPosition } from '../../../redux/module/position.slice';
import { findPostsWithinRadius } from '../../../common/mapUtil';

const CustomMapMarker = () => {
  // 더미 데이터
  const dumyData = [
    { id: 1, name: 'Place A', lat: 37.5023, lng: 127.0344 },
    { id: 2, name: 'Place B', lat: 37.5123, lng: 127.0544 },
    { id: 3, name: 'Place C', lat: 37.4923, lng: 127.0444 },
    { id: 4, name: 'Place D', lat: 37.5023, lng: 127.0644 },
    { id: 5, name: 'Place E', lat: 37.5223, lng: 127.0244 },
    { id: 6, name: 'Place F', lat: 37.4823, lng: 127.0544 },
    { id: 7, name: 'Place G', lat: 37.5123, lng: 127.0744 },
    { id: 8, name: 'Place H', lat: 37.4923, lng: 127.0344 },
    { id: 9, name: 'Place I', lat: 37.5223, lng: 127.0644 },
    { id: 10, name: 'Place J', lat: 37.4823, lng: 127.0444 },
    { id: 11, name: 'Place K', lat: 37.6023, lng: 127.1044 },
    { id: 12, name: 'Place L', lat: 37.4023, lng: 126.9844 },
    { id: 13, name: 'Place M', lat: 37.7023, lng: 127.1444 },
    { id: 14, name: 'Place N', lat: 37.3023, lng: 126.9044 },
    { id: 15, name: 'Place O', lat: 37.5623, lng: 127.2044 },
    { id: 16, name: 'Place P', lat: 37.4423, lng: 126.8444 },
    { id: 17, name: 'Place Q', lat: 37.6623, lng: 127.1844 },
    { id: 18, name: 'Place R', lat: 37.3823, lng: 126.9244 },
    { id: 19, name: 'Place S', lat: 37.5323, lng: 127.2144 },
    { id: 20, name: 'Place T', lat: 37.4223, lng: 126.8744 },
    { id: 21, name: 'Place U', lat: 37.6123, lng: 127.1144 },
    { id: 22, name: 'Place V', lat: 37.4023, lng: 126.9944 },
    { id: 23, name: 'Place W', lat: 37.6923, lng: 127.1544 },
    { id: 24, name: 'Place X', lat: 37.3223, lng: 126.9144 },
    { id: 25, name: 'Place Y', lat: 37.5523, lng: 127.1944 },
    { id: 26, name: 'Place Z', lat: 37.4623, lng: 126.8544 },
    { id: 27, name: 'Place AA', lat: 37.6523, lng: 127.1744 },
  ];

  const { lat, lng, address } = useSelector(selectPosition);
  const result = findPostsWithinRadius({ lat, lng }, 10, dumyData);
  console.log(result);

  return (
    <Container>
      <div>위도: {lat}</div>
      <div>경도: {lng}</div>
      <div>주소: {address}</div>
      <button></button>
    </Container>
  );
};
export default CustomMapMarker;

const Container = styled.div`
  width: 30rem;
  height: 10rem;
`;