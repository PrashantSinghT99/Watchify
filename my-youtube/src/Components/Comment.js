import React from "react";
import image from "../Assests/comment-icon.png";
import { useState } from "react";
const Comment = ({ comment }) => {
  const [replyState, setReplyState] = useState(false);
  const [replyModeComment, setReplyModeComment] = useState("");
  const setreplyState=()=>
  {
    setReplyState(true);
  }
  return (
    <>
      <div className="flex shadow-lg mt-6 ml-2 flex-col">
        <img className="h-10 w-10 mt-1" src={image} alt="commenterPic" />
        <div className="flex flex-col ml-2">
          <div>
            <span className="font-bold">{comment.name}</span>{" "}
          </div>
          <div> {comment.text}</div>
          {!replyState && (
            <div>
              <button className="mb-2 mt-1 px-2 py-1 text-[0.8rem] text-2xl font-semibold 
          rounded-full bg-stone-100 text-stone-500"
          onClick={setreplyState}>Reply</button>
            </div>
          )}
        </div>
        {replyState && (
          <div className="flex flex-col mt-2 ml-6">
            <div className="flex gap-2">
              <img src={image} width="40px" alt="usericon" />
              <input
                type="text"
                placeholder="Add a comment..."
                value={replyModeComment}
                className="border-b border-gray-200 dark:text-black md:p-2 focus:border-black text-lg focus:outline-none placeholder-stone-500  md:text-base w-full"
              onChange={(e)=>setReplyModeComment(e.target.value)}
              />
            </div>
            <div className="ml-[4%] mt-[10px]">
              <button className="px-2 py-1 text-[0.7rem] hover:bg-stone-200 font-semibold text-2xl rounded-full">
                Cancel
              </button>
              <button
                className={`px-2 py-1 text-[0.7rem] text-2xl font-semibold 
          rounded-full ${replyModeComment? "bg-blue-600 text-white cursor-pointer":"cursor-not-allowed  bg-stone-100  text-stone-500 dark:text-stone-500"}`}
              >
                Reply
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Comment;
