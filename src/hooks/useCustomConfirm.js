import { useDispatch } from 'react-redux';
import {
  closeModel,
  openConfirm,
  setResult,
} from '../redux/module/customConfirm.slice';

export const useCustomConfirm = () => {
  const dispatch = useDispatch();
  const handleOpenConfirm = (...status) => {
    const newConfirmStatus = status.reduce((acc, cur) => {
      acc = cur;
      return acc;
    }, {});
    dispatch(openConfirm(newConfirmStatus));
  };
  const checkResult = (result) => {
    dispatch(setResult(result));
  };

  const handleCloseCustomConfirm = () => {
    dispatch(closeModel());
  };

  return {
    handleOpenConfirm,
    handleCloseCustomConfirm,
    checkResult,
  };
};
