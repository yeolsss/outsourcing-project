import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchToGetherData } from '../api/lists';
import DetailImage from '../components/detail/DetailImage';
import DetailMenu from '../components/detail/DetailMenu';
import { setPosition } from '../redux/module/position.slice';
import { DetailForm } from '../components/detail/DetailForm';
import { DetailTitle } from '../components/detail/DetailTitle';

function Detail() {
  const { id: docId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['together', docId],
    queryFn: () => fetchToGetherData(docId),
  });

  useEffect(() => {
    if (isLoading || isError) return;

    const newData = {
      lat: data.coordinates.lat,
      lng: data.coordinates.lng,
      title: data.title,
      address: data.address,
    };
    dispatch(setPosition(newData));
  }, [data]);

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
      <div>
        {/*메뉴바*/}
        <DetailMenu together={{ cost, address, imgPath, email }} />
        {/*이미지*/}
        <DetailTitle title={title} />
        <DetailImage imgPath={imgPath} title={title} />
        <DetailForm together={data} />
      </div>
    </DetailContainer>
  );
}

export default Detail;

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  > div {
    margin: 0 auto;
  }
`;
