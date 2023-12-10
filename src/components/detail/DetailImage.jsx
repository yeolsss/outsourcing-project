import React from 'react';
import styled from 'styled-components';

function DetailImage({ imgPath, title }) {
  return (
    <>
      <StDetailImage src={imgPath} alt={title}></StDetailImage>
    </>
  );
}

export default DetailImage;

const StDetailImage = styled.img`
  width: 100%;
  height: 38.6rem;
  border-radius: 1rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;
