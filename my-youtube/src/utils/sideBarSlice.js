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
        },

    },
);

export const { sideBarState } = sideBarSlice.actions;

export default sideBarSlice.reducer;

