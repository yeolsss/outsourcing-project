import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';

function Header() {
  return (
    <StContainer>
      <StLogoContainer>
        <StLogoImg src={LogoImg} alt="투게더로고" />
        <h1>Together</h1>
      </StLogoContainer>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/detail'}>Detail</Link>
      </div>
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const StLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StLogoImg = styled.img`
  width: 6rem;
`;

export default Header;
