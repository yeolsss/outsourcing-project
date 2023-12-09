import styled from 'styled-components';

const SearchBar = ({ value, handler }) => {
  return (
    <StSearchBar
      type="text"
      placeholder="검색.."
      value={value}
      onChange={(e) => handler(e)}
    />
  );
};
const StSearchBar = styled.input`
  width: -webkit-fill-available;
  margin: 2rem 3.7rem 0 3.7rem;
  border: 1px solid #e6e6e6;
  border-radius: 5rem;
  padding: 1rem 1rem 1rem 1.5rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0.3rem var(--accent);
  }
`;
export default SearchBar;
