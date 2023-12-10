import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUpdate: false,
  isDelete: false,
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
  },
});

export const { setUpdate, setDelete } = detailStatusSlice.actions;
export const selectorDetailStatus = (state) => state.detailStatus;
export default detailStatusSlice.reducer;
