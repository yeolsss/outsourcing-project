import { useState } from 'react';

export function useInput(initialValue) {
  const [state, setState] = useState(initialValue);

  const handleState = (e) => {
    setState(e.target.value);
  };

  return [state, handleState, setState];
}
