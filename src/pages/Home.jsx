import { styled } from 'styled-components';
import TogetherList from '../components/togetherList/TogetherList';

function Home() {
  return (
    <StMainContainer>
      <TogetherList />
    </StMainContainer>
  );
}

const AddBtn = styled.img`
  width: 4rem;
  height: 4rem;
`;

const StMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
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

export default Home;
