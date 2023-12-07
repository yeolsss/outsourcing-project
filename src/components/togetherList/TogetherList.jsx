import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../../common/firebase';
import List from '../list/List';

function TogetherList() {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // query를 사용해서 해봐라.. 제천튜터님꺼보고
  // getDocs는 axios.get()이당
  useEffect(() => {
    const fechData = async () => {
      const querySnapshot = await getDocs(collection(db, 'lists'));
      const newArr = [];
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        newArr.push(doc.data());
      });

      setList(newArr);
    };
    fechData();
  }, []);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const filterList = list.filter((item) => {
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
