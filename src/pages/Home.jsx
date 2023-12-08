import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import LogoImg from '../assets/logo.png';
import AddPlus from '../assets/plus.png';
import KakaoMap from '../components/kakaoMap/KakaoMap';
import AddForm from '../components/main/AddForm';
import TogetherList from '../components/togetherList/TogetherList';

function Home() {
  const [isAdding, setIsAdding] = useState(false);
  // const [open, setOpen] = useState(false);

  return (
    <StMainContainer>
      <StLeftContainer>
        <StHeader>
          <div>
            <Link to={'/'}>
              <StLogoImg src={LogoImg} alt="투게더로고" />
            </Link>
          </div>
          <ul>
            <li>
              <button onClick={() => setIsAdding(!isAdding)}>
                <AddBtn src={AddPlus} alt="투게더 등록" />
              </button>
            </li>
          </ul>
        </StHeader>
        <div>
          {isAdding ? <AddForm setIsAdding={setIsAdding} /> : <TogetherList />}
        </div>
      </StLeftContainer>
      <KakaoMap />
    </StMainContainer>
  );
}

const AddBtn = styled.img`
  width: 4rem;
  height: 4rem;
`;

const StMainContainer = styled.div`
  height: 100%;
  display: flex;
  max-height: 100%;
  overflow: hidden;
  position: relative;
`;

const StLeftContainer = styled.div`
  width: 50%;
  //position: relative;
  height: 100vh;
  overflow-y: scroll;
  background-color: #fff;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #19685b;
    border-radius: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background: #e6e6e6;
  }
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e6e6e6;
`;

const StLogoImg = styled.img`
  width: 6rem;
`;

// const StHiddenButton = styled.button`
//   position: absolute;
//   right: 0;
//   top: 50%;
//   width: 4rem;
//   background-color: white;
//   transform: translateY(-50%);
// `;

export default Home;
