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
  width: 59.8rem;
  height: 38.6rem;
`;