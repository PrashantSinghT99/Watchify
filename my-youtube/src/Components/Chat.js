import React from "react";

const Chat = ({name,message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
      className="h-10 w-10 mt-1"
        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553__340.png"
        alt="livechatPic"
      />
      <span className="font-bold ml-1">{name}</span>
      <span className="ml-4">{message}</span>
    </div>
  );
};

export default Chat;
