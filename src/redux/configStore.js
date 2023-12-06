import { configureStore } from '@reduxjs/toolkit';
import position from './module/position.slice';

const store = configureStore({
  reducer: {
    position,
  },
});

export default store;
