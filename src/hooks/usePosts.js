import { useDispatch, useSelector } from 'react-redux';
import { selectorTogether, setTogethers } from '../redux/module/together.slice';

export const usePosts = () => {
  const { originTogethers } = useSelector(selectorTogether);
  const dispatch = useDispatch();
  const handler = (mapRef) => {
    dispatch(setTogethers());
  };

  return { handler };
};
