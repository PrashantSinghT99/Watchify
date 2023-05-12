import { createSlice } from '@reduxjs/toolkit'
const sideBarSlice = createSlice(
    {
        name: "sideBarStateSlice",
        initialState:
        {
            open: true
        },
        reducers: {
            sideBarState: (state) => {
                state.open = !state.open;
            },
            closeMenu: (state) => {
                state.open = false;
              },
        },

    },
);

export const { sideBarState,closeMenu } = sideBarSlice.actions;

export default sideBarSlice.reducer;

