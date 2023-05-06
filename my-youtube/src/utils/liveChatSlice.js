import { createSlice } from "@reduxjs/toolkit";
import { MAX_LIVECHAT_COUNT } from '../utils/constants'
const liveChatSlice = createSlice({
  name: "chat",
  initialState: {
    chatsArray: [],
  },
  reducers: {
    sendChat: (state, actions) => {
      state.chatsArray.splice(MAX_LIVECHAT_COUNT, 1);
      state.chatsArray.unshift(actions.payload);
    },
  },
});

export const { sendChat } = liveChatSlice.actions;
export default liveChatSlice.reducer;
