import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTogether } from 'redux/module/together.slice';
import styled from 'styled-components';
import SearchBar from '../searchBar/SearchBar';
import TogetherCard from '../togetherCard/TogetherCard';

function TogetherList() {
  const selectTogethers = useSelector(selectTogether);
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const filterList = selectTogethers.togethers?.filter((item) => {
    return item.title.includes(searchInput);
  });

  return (
    <>
      <SearchBar value={searchInput} handler={handleSearch} />
      <StUl>
        {filterList?.map((together, index) => {
          return (
            <StLi key={index}>
              <TogetherCard together={together} />
            </StLi>
          );
        })}
      </StUl>
    </>
  );
}

export default TogetherList;

const StLi = styled.li`
  /*margin: 0.8rem;*/
  margin: 1.5rem;
  > a {
    text-decoration: none;
    color: black;
  }
`;

const StUl = styled.ul`
  display: grid;
  /*grid-template-columns: 1fr 1fr;*/
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 2.3rem;
`;
