import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  title: '',
  model: null,
  checkValue: '',
  result: false,
};

const customConfirmSlice = createSlice({
  name: 'customConfirm',
  initialState,
  reducers: {
    openConfirm: (state, { payload }) => {
      state.isOpen = true;
      state.title = payload.title;
      state.model = 'confirm';
      state.checkValue = payload.checkValue;
    },
    openAlert: (state, { payload }) => {
      state.isOpen = true;
      state.title = payload.title;
      state.model = 'alert';
      state.value = payload.value;
      state.checkValue = payload.checkValue;
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
      state.model = null;
      state.checkValue = '';
      state.result = false;
    },
  },
});

export const { closeModel, openConfirm, openAlert, setResult } =
  customConfirmSlice.actions;
export const selectorConfirm = (state) => state.customConfirm;
export default customConfirmSlice.reducer;
