import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  togethers: [],
  originTogethers: [],
};
const togetherSlice = createSlice({
  name: 'together',
  initialState,
  reducers: {
    setOriginTogethers(state, action) {
      state.originTogethers = action.payload;
    },
    setTogethers(state, action) {
      state.togethers = action.payload;
    },
  },
});

export const { setTogethers, setOriginTogethers } = togetherSlice.actions;
export const selectorTogether = (state) => state.together;
export default togetherSlice.reducer;
