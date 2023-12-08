import React, { useState } from 'react';
import styled from 'styled-components';

function DetailText({ gether }) {
  const [text, setText] = useState('');

  return (
    <div>
      <StDetailText>{gether.content}</StDetailText>;
    </div>
  );
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
