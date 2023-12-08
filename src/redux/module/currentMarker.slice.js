import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  selectedMarker: '',
};

const CurrentMarkerSlice = createSlice({
  name: 'currentMarker',
  initialState,
  reducers: {
    handleMarker: (state, { payload }) => {
      if (!payload) {
        state.isOpen = false;
        state.selectedMarker = '';
        return;
      }
      payload.docId === state.selectedMarker.docId
        ? (state.isOpen = !state.isOpen)
        : (state.isOpen = true);
      state.selectedMarker = payload;
    },
  },
});

export const { handleMarker } = CurrentMarkerSlice.actions;
export const selectCurrentMarker = (state) => state.currentMarker;

export default CurrentMarkerSlice.reducer;
