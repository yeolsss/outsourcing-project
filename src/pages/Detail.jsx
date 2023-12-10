import { useQuery } from '@tanstack/react-query';
import DetailData from 'components/detail/DetailData';
import DetailForm from 'components/detail/DetailForm';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchToGetherData } from '../api/lists';
import DetailImage from '../components/detail/DetailImage';
import DetailMenu from '../components/detail/DetailMenu';
import { DetailTitle } from '../components/detail/DetailTitle';
import { setPosition } from '../redux/module/position.slice';

function Detail() {
  const { id: docId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['together', docId],
    queryFn: () => fetchToGetherData(docId),
  });

  const [isUpdate, setIsUpdate] = useState(false);

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

  const handleIsUpdate = (type) => {
    setIsUpdate(type);
  };

  return (
    <DetailContainer>
      {/*메뉴바*/}
      <DetailMenu
        together={{ cost, address, imgPath, email }}
        handler={handleIsUpdate}
        isUpdate={{ isUpdate, setIsUpdate }}
      />
      {/* !isUpdate ?  밑에꺼보여주고 :  form있는놈 보여주고*/}
      {!isUpdate ? (
        <div>
          {/*이미지*/}
          <DetailTitle title={title} />
          <DetailImage imgPath={imgPath} title={title} />
          <DetailData together={data} />
        </div>
      ) : (
        <DetailForm docId={docId} together={data} setIsUpdate={setIsUpdate} />
      )}
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
