import { createSlice } from "@reduxjs/toolkit";
import { commentsData } from "./constants";
//import { current } from "@reduxjs/toolkit";
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
        },
        deleteAction: (state, action) => {
            function deleteAction(comments){
                for (let i = 0; i < comments.length; i++){
                    if(comments[i].id === action.payload){
                        comments.splice(i, 1)
                    } else if(comments[i].replies.length > 0){
                        deleteAction(comments[i].replies)
                    }
                }
                return false
            }
            deleteAction(state.commentsData)
        }

    }


})


export const { addComment, addReplyAction,deleteAction } = commentsSlice.actions;
export default commentsSlice.reducer;
