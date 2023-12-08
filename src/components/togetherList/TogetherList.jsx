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
import SearchBar from '../searchBar/SearchBar';

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

  // getDocs는 axios.get()이당
  // useEffect(() => {
  //   const fechData = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'lists'));
  //     const newArr = [];
  //     querySnapshot.forEach((doc) => {
  //       // console.log(`${doc.id} => ${doc.data()}`);
  //       newArr.push(doc.data());
  //     });

  //     setList(newArr);
  //   };
  //   fechData();
  // }, []);

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
        <List list={filterList} />
      </StUl>
    </>
  );
}

export default TogetherList;

const StUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem;
`;
