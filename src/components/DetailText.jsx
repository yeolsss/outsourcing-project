import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../common/firebase';

function DetailText() {
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'list'));
      const querySnapshot = await getDocs(q);

      const initialText = [];

      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data(),
        };

        initialText.push(data);
      });
      setText(initialText);
    };
    fetchData();
  }, []);

  return (
    <div>
      <StDetailText>{text[0].content}</StDetailText>;
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
