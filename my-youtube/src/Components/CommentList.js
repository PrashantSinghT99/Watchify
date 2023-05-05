import React from "react";
import Comment from "./Comment.js";
import { commentsData } from "../utils/constants";

const CommentList = ({ commentsData }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mt-2 ml-2">Comments : </h1>
      {commentsData.map((comment) => (
        <div>
          <Comment comment={comment} />
          <div className="pl-5 border border-l-black ml-5">
            <CommentList commentsData={comment.replies} />
          </div>
        </div>
      ))}
    </>
  );
};

const commentDataPass = () => {
  return (
    <>
      <CommentList commentsData={commentsData} />
    </>
  );
};

export default CommentList;
