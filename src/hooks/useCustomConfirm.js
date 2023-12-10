import { useDispatch } from 'react-redux';
import {
  closeModel,
  openAlert,
  openConfirm,
  openModal,
  setResult,
} from '../redux/module/customConfirm.slice';
import store from '../redux/configStore';

export const useCustomConfirm = () => {
  const dispatch = useDispatch();
  const handleOpenConfirm = (...status) => {
    const newConfirmStatus = status.reduce((acc, cur) => {
      acc = cur;
      return acc;
    }, {});
    dispatch(openConfirm(newConfirmStatus));
  };

  const handleOpenModal = (title) => {
    return new Promise((res) => {
      dispatch(openModal({ title }));

      const unsubscribe = store.subscribe(() => {
        const result = store.getState().customConfirm.result;
        res(result);
        unsubscribe();
      });
    });
  };

  const handleOpenAlert = (title, targetPage = '') => {
    dispatch(openAlert({ title, targetPage }));
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
    handleOpenAlert,
    handleOpenModal,
  };
};
