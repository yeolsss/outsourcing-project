import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getLists } from '../../api/lists';
import List from '../list/List';

function TogetherList() {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const { isLoading, isError, data } = useQuery('lists', getLists);
  console.log(data);
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

  const filterList = data.filter((item) => {
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
  margin: 2rem;
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
  margin: 0 0.6rem;
`;
