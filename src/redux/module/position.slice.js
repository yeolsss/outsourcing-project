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

export const __setAddress = createAsyncThunk(
  'setAddress',
  async (payload, thunkAPI) => {
    const address = await getAddress(payload);
    return { ...payload, address };
  },
);

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
  reducers: {
    setPosition: (state, { payload }) => {
      state.position = payload;
    },
  },
  extraReducers: {
    [__setAddress.fulfilled]: (state, { payload }) => {
      state.position = payload;
    },
    [__searchAddress.fulfilled]: (state, { payload }) => {
      state.position = payload;
    },
  },
});

export const { setPosition } = positionSlice.actions;
export const selectPosition = (state) => state.position.position;

export default positionSlice.reducer;
