import { useDispatch, useSelector } from 'react-redux';
import { selectTogether, setTogethers } from '../redux/module/together.slice';

export const usePosts = () => {
  const { originTogethers } = useSelector(selectTogether);
  const dispatch = useDispatch();
  const handler = (mapRef) => {
    dispatch(setTogethers());
  };

  return { handler };
};
