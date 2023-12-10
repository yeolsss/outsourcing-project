import { configureStore } from '@reduxjs/toolkit';
import position from './module/position.slice';
import currentMarker from './module/currentMarker.slice';
import together from './module/together.slice';
import customConfirm from './module/customConfirm.slice';
import detailStatus from './module/detailStatus.slice';

const store = configureStore({
  reducer: {
    position,
    currentMarker,
    together,
    customConfirm,
    detailStatus,
  },
});

export default store;
