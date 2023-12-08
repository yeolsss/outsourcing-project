import { useState } from 'react';

const UseInput = () => {
  const [value, setValue] = useState('');

  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler];
};

export default UseInput;
