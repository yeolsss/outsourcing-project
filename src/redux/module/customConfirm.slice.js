import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  title: '',
  subTitle: '',
  model: { type: '', task: '' },
  checkValue: '',
  result: false,
  targetPage: '',
};

const customConfirmSlice = createSlice({
  name: 'customConfirm',
  initialState,
  reducers: {
    openConfirm: (state, { payload }) => {
      state.isOpen = true;
      state.title = payload.title;
      state.subTitle = payload.subTitle;
      state.model.type = 'confirm';
      state.model.task = payload.task;
      state.checkValue = payload.checkValue;
    },
    openAlert: (state, { payload }) => {
      state.isOpen = true;
      state.title = payload.title;
      state.model.type = 'alert';
      state.targetPage = payload.targetPage;
    },
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.title = payload.title;
      state.model.type = 'modal';
      state.model.task = 'confirm';
    },
    setResult: (state, { payload }) => {
      state.result = payload;
      state.isOpen = false;
      state.title = '';
      state.confirmType = null;
      state.checkValue = '';
    },
    closeModel: (state) => {
      state.isOpen = false;
      state.title = '';
      state.model = { type: '', task: '' };
      state.checkValue = '';
      state.result = false;
    },
  },
});

export const { closeModel, openConfirm, openAlert, setResult, openModal } =
  customConfirmSlice.actions;
export const selectorConfirm = (state) => state.customConfirm;
export default customConfirmSlice.reducer;
