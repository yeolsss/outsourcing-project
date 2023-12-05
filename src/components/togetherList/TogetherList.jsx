import React, { useState } from 'react';
import sampleImg from '../../assets/sampleImg.jpeg';

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
  ];
  const [list, setList] = useState(initialState);
  return (
    <div>
      <input type="text" placeholder="검색.." />
      <ul>
        {list.map((element) => {
          return (
            <li>
              <div>
                <img src={element.imgPath} alt={element.title} />
              </div>
              <div>
                <h3>{element.title}</h3>
                <p>{element.content}</p>
                <p>{element.createdAt}</p>
                <p>
                  <span>{element.togetherNum}</span>게더..?
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TogetherList;
