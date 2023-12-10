import { styled } from 'styled-components';

export const DetailTitle = ({ title }) => {
  return (
    <StDetailTitle>
      <h2>" {title} "</h2>
    </StDetailTitle>
  );
};

const StDetailTitle = styled.div`
  width: 100%;
  @media (max-width: 650px) {
    width: 60%;
  }
  /* background-color: var(--accent); */
  /* color: var(--secondary); */
  border-radius: 1rem;
  > h2 {
    font-size: 1.7rem;
    font-weight: 700;
    padding: 0;
    text-align: start;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
