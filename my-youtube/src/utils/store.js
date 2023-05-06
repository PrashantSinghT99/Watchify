import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from './sideBarSlice';
import liveChatSlice from './liveChatSlice';
import searchCachingSlice from './searchCachingSlice';

const store=configureStore({
  reducer:
  {
    sideBarSlice:sideBarSlice,
    liveChatSlice:liveChatSlice,
    searchCachingSlice:searchCachingSlice
  }
 });

export default store;