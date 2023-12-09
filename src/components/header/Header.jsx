import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from 'assets/logo4.png';
import AddPlus from 'assets/plus.png';

function Header() {
  return (
    <StHeader>
      <div>
        <Link to={'/'}>
          <StLogoImg src={LogoImg} alt="투게더로고" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to={'/create'}>
            <AddBtn src={AddPlus} alt="투게더 등록" />
          </Link>
        </li>
      </ul>
    </StHeader>
  );
}

const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 8rem;
  border-bottom: 1px solid #e6e6e6;
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
export default Header;
