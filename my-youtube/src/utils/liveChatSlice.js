import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "chat",
  initialState: {
    chatsArray: [],
  },
  reducers: {
    sendChat: (state, actions) => {
      state.chatsArray.push(actions.payload);
    },
  },
});

export const { sendChat } = liveChatSlice.actions;
export default liveChatSlice.reducer;
