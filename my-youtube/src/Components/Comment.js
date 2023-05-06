import React from "react";
import image from '../Assests/comment-icon.png'
const Comment = ({ comment }) => {
  return (
    <>
      <div className="flex shadow-lg mt-6 ml-2">
        <img
          className="h-10 w-10 mt-1"
          src={image}
          alt="commenterPic"
        />
        <div className="flex flex-col ml-2">
          <div>
            <span className="font-bold">{comment.name}</span> </div>
          <div> {comment.text}</div>
        </div>
      </div>
    </>
  );
};

export default Comment;
