import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchToGetherData } from '../api/lists';
import DetailImage from '../components/DetailImage';
import DetailMenu from '../components/DetailMenu';
import DetailText from '../components/DetailText';
import DetailUrl from '../components/DetailUrl';

function Detail() {
  // 여기에서 데이터를 받아서
  // props로 내려줄게요

  const { id: docId } = useParams();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['together'],
    queryFn: () => fetchToGetherData(docId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  const {
    address,
    content,
    coordinates,
    cost,
    createdAt,
    email,
    gender,
    id,
    imgPath,
    isDone,
    password,
    title,
    togetherNum,
  } = data;

  return (
    <DetailContainer>
      <DetailMenu gether={{ cost, address }} />
      <DetailImage />
      <DetailUrl gether={{ cost, togetherNum, address }} />
      <DetailText gether={data} />
    </DetailContainer>
  );
}

export default Detail;

const DetailContainer = styled.div`
  background-color: #c8c8c8;
  width: 96rem;
  height: 130.5rem;
  padding: 5.3rem;
  margin: auto;
`;
