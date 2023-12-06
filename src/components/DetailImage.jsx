import React from 'react';
import styled from 'styled-components';

function DetailImage() {
  return (
    <StDetailImage src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg"></StDetailImage>
  );
}

export default DetailImage;

const StDetailImage = styled.img`
  width: 59.8rem;
  height: 38.6rem;
`;
