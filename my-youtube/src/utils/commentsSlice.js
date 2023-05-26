import { createSlice, current } from "@reduxjs/toolkit";
import { commentsData } from "./constants";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        commentsData: commentsData
    },
    reducers: {
        addComment: (state, action) => {
            state.commentsData.unshift(action.payload)
        },
        addReplyAction: (state, action) => {
            const { parentid, reply } = action.payload
            function replyRecursiveFunc(data) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id === parentid) {
                        data[i].replies.push(reply)
                    }
                    else if (data[i].replies.length > 0) {
                        replyRecursiveFunc(data[i].replies)
                    }
                }
                return false;
            }
            replyRecursiveFunc(state.commentsData)
        }

    }


})


export const { addComment, addReplyAction } = commentsSlice.actions;
export default commentsSlice.reducer;
