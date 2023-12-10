import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import DetailData from 'components/detail/DetailData';
import DetailForm from 'components/detail/DetailForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchToGetherData } from '../api/lists';
import DetailImage from '../components/detail/DetailImage';
import DetailMenu from '../components/detail/DetailMenu';
import { DetailTitle } from '../components/detail/DetailTitle';
import { setPosition } from '../redux/module/position.slice';
import {
  selectorDetailStatus,
  setDelete,
  setDone,
  setUpdate,
} from '../redux/module/detailStatus.slice';
import {
  deleteImagesInStorage,
  removeTogetherToFireBase,
  updateTogetherToFireBase,
} from '../api/togethers';
import { useCustomConfirm } from '../hooks/useCustomConfirm';

function Detail() {
  const { id: docId } = useParams();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['together', docId],
    queryFn: () => fetchToGetherData(docId),
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: removeTogetherToFireBase,
  });

  const { mutate: doneMutate } = useMutation({
    mutationFn: updateTogetherToFireBase,
  });

  const { handleOpenAlert } = useCustomConfirm();

  const { isUpdate, isDelete, isDone } = useSelector(selectorDetailStatus);
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

  useEffect(() => {
    return () => {
      dispatch(setUpdate(false));
      dispatch(setDelete(false));
      dispatch(setDone(false));
    };
  }, []);

  useEffect(() => {
    if (isDelete) {
      deleteMutate(docId, {
        onSuccess: async () => {
          const deleteImgPath = `${data.id}/${data.imgFileName}`;
          await deleteImagesInStorage(deleteImgPath);
          queryClient.invalidateQueries(['togethers']);
          handleOpenAlert('투게더가 삭제되었습니다.', '/');
        },
      });
    }
  }, [isDelete]);

  useEffect(() => {
    const updateTogether = { isDone: true };
    if (isDone) {
      doneMutate(
        { docId, updateTogether },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(['togethers']);
            handleOpenAlert('투게더가 마감되었습니다.', '/');
          },
        },
      );
    }
  }, [isDone]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  const { address, cost, email, imgPath, password, title } = data;

  return (
    <DetailContainer>
      {/* !isUpdate ?  밑에꺼보여주고 :  form있는놈 보여주고*/}
      {!isUpdate ? (
        <div>
          {/*이미지*/}
          <DetailTitle title={title} />
          <DetailImage imgPath={imgPath} title={title} />
          <DetailData together={data} />
        </div>
      ) : (
        <DetailForm docId={docId} together={data} />
      )}
      {/*메뉴바*/}
      <StDetailMenuWrapper>
        <DetailMenu
          together={{ cost, address, imgPath, email, password }}
          isUpdate={isUpdate}
        />
      </StDetailMenuWrapper>
    </DetailContainer>
  );
}

export default Detail;

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #19685b;
    border-radius: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background: #e6e6e6;
  }

  > div {
    @media (max-width: 650px) {
      width: 50%;
    }
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
  }
`;
const StDetailMenuWrapper = styled.aside`
  margin: auto 0;
`;
const StDetailContentWrapper = styled.div``;
