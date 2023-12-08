import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getLists } from '../../api/togethers';
import {
  selectorTogether,
  setOriginTogethers,
  setTogethers,
} from '../../redux/module/together.slice';
import List from '../list/List';

function TogetherList() {
  const dispatch = useDispatch();
  const selectTogethers = useSelector(selectorTogether);
  const [searchInput, setSearchInput] = useState('');

  const { isLoading, isError, data } = useQuery({
    queryKey: ['togethers'],
    queryFn: getLists,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (data) {
      dispatch(setOriginTogethers(data));
      dispatch(setTogethers(data));
    }
  }, [data]);

  if (isLoading) {
    return <h1>로딩중 입니닷..!!</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니닷..!!</h1>;
  }

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const filterList = selectTogethers.togethers?.filter((item) => {
    return item.title.includes(searchInput);
  });

  return (
    <>
      <StSearchBar
        type="text"
        placeholder="검색.."
        onChange={(e) => handleSearch(e)}
      />

      <StUl>
        <List list={filterList} />
      </StUl>
    </>
  );
}

export default TogetherList;

const StSearchBar = styled.input`
  width: -webkit-fill-available;
  margin: 2rem 2rem 0 2rem;
  border: 1px solid #e6e6e6;
  border-radius: 5rem;
  padding: 1rem;

  &:focus {
    outline: none;
    border-color: #23917f;
    box-shadow: 0 0 1rem #23917f;
  }
`;

const StUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem;
`;
