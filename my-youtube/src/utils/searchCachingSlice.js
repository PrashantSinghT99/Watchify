import { createSlice } from "@reduxjs/toolkit";
const searchCachingSlice = createSlice({
        name: "searchCache",
        initialState: {},
        reducers: {
            searchCached: (state, action) => {
                state = Object.assign(state, action.payload);
            }
        }

    }
)
export const { searchCached } = searchCachingSlice.actions;
export default searchCachingSlice.reducer;
