import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from './sideBarSlice';

const store=configureStore({
  reducer:
  {
    sideBarSlice:sideBarSlice
  }
 });

export default store;