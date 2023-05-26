import React, { useState } from "react";
import Comment from "./Comment.js";
import image from "../Assests/comment-icon.png";
import { useDispatch, useSelector } from "react-redux"
import { addComment } from "../utils/commentsSlice.js";
import {useRandomId} from '../utils/useRandomId.js'
const CommentList = () => {

  const [CommentBtnState, setCommentBtnState] = useState("");
 
  const commentsData = useSelector((store) => store.commentsSlice.commentsData)
  const dispatch = useDispatch();
  const randomId=useRandomId();

  const submitComment = () => {
    dispatch(
      addComment(
        {
          id:randomId,
          name: "Prashant Singh",
          text: CommentBtnState,
          replies: [],
        }
      )
    )

setCommentBtnState("")
  }

  return (
    <>
      <h1 className="text-2xl font-bold mt-2 ml-2">Comments : </h1>
      <div className="flex flex-col mt-4">
        <div className="flex gap-2">
          <img src={image} alt="usericon" width="40px"/>
          <input
            type="text"
            value={CommentBtnState}
            placeholder="Add a comment..."
            className="border-b border-gray-200 dark:text-black md:p-2 focus:border-black text-lg focus:outline-none placeholder-stone-500  md:text-base w-full"
            onChange={(e) => {
              setCommentBtnState(e.target.value)
                ;
            }}
          />
        </div>
        <div className="ml-[4%] mt-[10px]">
          <button className="md:text-sm md:px-4 md:py-2 px-2 py-1 text-[0.7rem] hover:bg-stone-200 font-semibold text-2xl rounded-full"
          onClick={()=>setCommentBtnState("")}>
            Cancel
          </button>
          <button
            onClick={submitComment}
            className={`md:text-sm md:px-4 md:py-2 px-2 py-1 text-[0.7rem] text-2xl font-semibold 
          rounded-full ${CommentBtnState ? "cursor-pointer bg-blue-600 text-white" : "bg-stone-100 text-stone-500 dark:text-stone-500  cursor-not-allowed"}`}
          >
            Comment
          </button>
        </div>
      </div>
      <CommentDataList commentsData={commentsData} />
    </>
  );
};

const CommentDataList = ({ commentsData }) => {
  return (
    <>
      {commentsData.map((comment, index) => (
        <div key={index}>
          <Comment comment={comment} />
          <div className="pl-5 border border-l-black ml-5">
            <CommentDataList commentsData={comment.replies} />
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentList;
