import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';

function Header() {
  return (
    <StContainer>
      <Link to={'/'}>
        <StLogoImg src={LogoImg} alt="투게더로고" />
      </Link>
      <StPages>
        <StPageFont>
          <Link to={'/'}>
            <StPageFont>Home</StPageFont>
          </Link>
        </StPageFont>
        <StPageFont>
          <Link to={'/detail'}>
            <StPageFont>Detail</StPageFont>
          </Link>
        </StPageFont>
      </StPages>
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 8rem;
`;

const StLogoImg = styled.img`
  width: 6rem;
`;

const StPages = styled.div`
  display: flex;
`;

const StPageFont = styled.div`
  font-size: 2rem;
  color: #0f3f37;
  padding: 0.4rem;
  &:hover {
    color: #23917f;
  }
`;

export default Header;
