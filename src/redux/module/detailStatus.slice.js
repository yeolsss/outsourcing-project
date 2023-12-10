import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUpdate: false,
  isDelete: false,
  isDone: false,
};
const detailStatusSlice = createSlice({
  name: 'detailStatus',
  initialState,
  reducers: {
    setUpdate: (state, { payload }) => {
      state.isUpdate = payload;
    },
    setDelete: (state, { payload }) => {
      state.isDelete = payload;
    },
    setDone: (state, { payload }) => {
      state.isDone = payload;
    },
  },
});

export const { setUpdate, setDelete, setDone } = detailStatusSlice.actions;
export const selectorDetailStatus = (state) => state.detailStatus;
export default detailStatusSlice.reducer;
