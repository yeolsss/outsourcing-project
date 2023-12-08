import { configureStore } from '@reduxjs/toolkit';
import position from './module/position.slice';
import currentMarker from './module/currentMarker.slice';

const store = configureStore({
  reducer: {
    position,
    currentMarker,
  },
});

export default store;
