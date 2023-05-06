import React from "react";
import Comment from "./Comment.js";
import { commentsData } from "../utils/constants";

const CommentDataList = ({ commentsData }) => {
  return (
    <> 
      {commentsData.map((comment,index) => (
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

const CommentList = () => {
  return (
    <>
     <h1 className="text-2xl font-bold mt-2 ml-2">Comments : </h1>
      <CommentDataList commentsData={commentsData} />
    </>
  );
};

export default CommentList;
