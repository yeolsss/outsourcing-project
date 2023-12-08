import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress, getPosition } from '../../common/mapUtil';

const initialState = {
  position: {
    lat: 37.5023262,
    lng: 127.0444546,
    address: '서울 강남구 역삼동 706-19',
    title: '',
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

// 주소로 검색 할 때
export const __searchAddress = createAsyncThunk(
  'searchAddress',
  async (payload) => {
    const position = await getPosition(payload);
    return { ...position };
  },
);

const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {},
  extraReducers: {
    [__setAddress.fulfilled]: (state, { payload }) => {
      state.position = payload;
    },
    [__searchAddress.fulfilled]: (state, { payload }) => {
      state.position = payload;
    },
  },
});

export const selectPosition = (state) => state.position.position;
export default positionSlice.reducer;
