import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../common/mapUtil';

const initialState = {
  position: {
    lat: 37.5566803113882,
    lng: 126.904501286522,
    address: '',
  },
};

// 이진호 갓진호 신진호 대진호 킹진호 갓신대킹진호
export const __setAddress = createAsyncThunk(
  'setAddress',
  async (payload, thunkAPI) => {
    const address = await getAddress(payload);
    return { ...payload, address };
  },
);
const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {},
  extraReducers: {
    [__setAddress.fulfilled]: (state, payload) => {
      state.position = payload;
    },
  },
});

export const selectPosition = (state) => state.position.position;
export default positionSlice.reducer;
