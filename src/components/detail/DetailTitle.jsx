import { styled } from 'styled-components';

export const DetailTitle = ({ title }) => {
  return (
    <StDetailTitle>
      <h2>🏠 {title}</h2>
    </StDetailTitle>
  );
};

const StDetailTitle = styled.div`
  width: 100%;
  @media (max-width: 650px) {
    width: 60%;
  }
  background-color: var(--accent);
  color: white;
  border-radius: 1rem;
  > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    padding: 0;
    text-align: center;
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
  }
`;
