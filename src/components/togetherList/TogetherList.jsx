import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectorTogether } from 'redux/module/together.slice';
import SearchBar from '../searchBar/SearchBar';
import TogetherCard from '../togetherCard/TogetherCard';

function TogetherList() {
  const selectTogethers = useSelector(selectorTogether);
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
  margin: 0.8rem;
  > a {
    text-decoration: none;
    color: black;
  }
`;

const StUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem;
`;
