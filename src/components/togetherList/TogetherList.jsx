import React, { useState } from 'react';
import styled from 'styled-components';
import sampleImg from '../../assets/sampleImg.jpeg';
import List from '../list/List';

function TogetherList() {
  const initialState = [
    {
      id: '1',
      title: '제목1',
      content: '내용1',
      createdAt: '생성시간??',
      imgPath: sampleImg,
      cost: 2,
      togetherNum: 2,
    },
    {
      id: '2',
      title: '제목2',
      content: '내용2',
      createdAt: '생성시간??',
      imgPath: sampleImg,
      cost: 2,
      togetherNum: 2,
    },
    {
      id: '3',
      title: '제목3',
      content: '내용3',
      createdAt: '생성시간??',
      imgPath: sampleImg,
      cost: 2,
      togetherNum: 2,
    },
    {
      id: '4',
      title: '제목4',
      content: '내용4',
      createdAt: '생성시간??',
      imgPath: sampleImg,
      cost: 2,
      togetherNum: 2,
    },
    {
      id: '5',
      title: '제목5',
      content: '내용5',
      createdAt: '생성시간??',
      imgPath: sampleImg,
      cost: 2,
      togetherNum: 2,
    },
    {
      id: '6',
      title: '제목6',
      content: '내용6',
      createdAt: '생성시간??',
      imgPath: sampleImg,
      cost: 2,
      togetherNum: 2,
    },
    {
      id: '7',
      title: '제목7',
      content: '내용7',
      createdAt: '생성시간??',
      imgPath: sampleImg,
      cost: 2,
      togetherNum: 2,
    },
  ];
  const [list, setList] = useState(initialState);
  const [searchInput, setSearchInput] = useState('');

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
`;

const StUl = styled.ul`
  display: grid;
  margin: 2rem;
`;
