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
  margin: 2rem 2.8rem 0 2.8rem;
  border: 1px solid #e6e6e6;
  border-radius: 5rem;
  padding: 1rem 1rem 1rem 1.5rem;

  &:focus {
    outline: none;
    /* border-color: #23917f; */
    box-shadow: 0 0 0.3rem #23917f;
  }
`;
export default SearchBar;
