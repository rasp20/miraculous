/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../pages/home/slice';

const store = configureStore({
  reducer: {
    home: homeSlice
  }
});

export default store;
