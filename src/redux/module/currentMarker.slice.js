import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  selectedMarkerId: '',
};

const CurrentMarkerSlice = createSlice({
  name: 'currentMarker',
  initialState,
  reducers: {
    handleMarker: (state, { payload }) => {
      payload === state.selectedMarkerId
        ? (state.isOpen = !state.isOpen)
        : (state.isOpen = true);
      state.selectedMarkerId = payload;
    },
  },
});

export const { handleMarker } = CurrentMarkerSlice.actions;
export const selectCurrentMarker = (state) => state.currentMarker;

export default CurrentMarkerSlice.reducer;
