import React, { useState } from 'react';
import AddForm from '../components/main/AddForm';

function Home() {
  const [isAdding, setIsAdding] = useState(false);

  return (
  <>
    <div>
      {isAdding? (
        <AddForm />
      ) : (
        <div>리스트영역</div>
      )}

    </div>
    <div>
      지도영역
    </div>
  </>)
}

export default Home;
