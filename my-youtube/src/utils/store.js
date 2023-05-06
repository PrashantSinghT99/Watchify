import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from './sideBarSlice';
import liveChatSlice from './liveChatSlice';

const store=configureStore({
  reducer:
  {
    sideBarSlice:sideBarSlice,
    liveChatSlice:liveChatSlice
  }
 });

export default store;