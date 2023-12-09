import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getLists } from '../api/togethers';
import {
  setOriginTogethers,
  setTogethers,
} from '../redux/module/together.slice';

export const useTogethers = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['togethers'],
    queryFn: getLists,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (data) {
      dispatch(setOriginTogethers(data));
      dispatch(setTogethers());
    }
  }, [data]);

  if (isLoading) {
    return <h1>로딩중 입니닷..!!</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니닷..!!</h1>;
  }
};
