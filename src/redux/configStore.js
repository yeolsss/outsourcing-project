import { configureStore } from '@reduxjs/toolkit';
import position from './module/position.slice';
import currentMarker from './module/currentMarker.slice';
import together from './module/together.slice';

const store = configureStore({
  reducer: {
    position,
    currentMarker,
    together,
  },
});

export default store;
