import { createSlice } from '@reduxjs/toolkit';
import { filterMarkersInBounds } from '../../common/mapUtil';

const initialState = {
  togethers: [],
  originTogethers: [],
  mapRef: null,
};
const togetherSlice = createSlice({
  name: 'together',
  initialState,
  reducers: {
    setOriginTogethers(state, action) {
      state.originTogethers = action.payload;
    },
    setTogethers(state, _) {
      if (state.mapRef) {
        state.togethers = filterMarkersInBounds(
          state.originTogethers,
          state.mapRef,
        );
      } else state.togethers = state.originTogethers;
    },
    setMapRefCurrent: (state, { payload }) => {
      state.mapRef = payload;
    },
  },
});

export const { setTogethers, setOriginTogethers, setMapRefCurrent } =
  togetherSlice.actions;
export const selectorTogether = (state) => state.together;
export const selectorCurrentMapRef = (state) => state.position.mapRef;
export default togetherSlice.reducer;
