import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from './sideBarSlice';
import liveChatSlice from './liveChatSlice';
import searchCachingSlice from './searchCachingSlice';
import commentsSlice from './commentsSlice';
const store=configureStore({
  reducer:
  {
    sideBarSlice:sideBarSlice,
    liveChatSlice:liveChatSlice,
    searchCachingSlice:searchCachingSlice,
    commentsSlice:commentsSlice
  }
 });

export default store;