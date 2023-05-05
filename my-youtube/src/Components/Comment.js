import React from "react";

const Comment = ({ comment }) => {
  return (
    <>
      <div className="flex shadow-lg mt-6 ml-2">
        <img
          className="h-10 w-10 mt-1"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553__340.png"
          alt="commenterPic"
        />
        <div className="flex flex-col ml-2">
          <div> {comment.name}</div>
          <div> {comment.text}</div>
        </div>
      </div>
    </>
  );
};

export default Comment;
