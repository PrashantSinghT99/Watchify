import React, { useState } from "react";
import Chat from './Chat'
import { useDispatch, useSelector } from 'react-redux'
import { sendChat } from "../utils/liveChatSlice";


const Livechats = () => {
  const [enteredChat, setEnteredChat] = useState("");


const displaychats=useSelector((store)=>store.liveChatSlice.chatsArray);

// console.log("this is display chats",displaychats)

  const dispatch = useDispatch();

  const setLiveMessage = (e) => {
    setEnteredChat(e.target.value);
  }
  const addComment = (e) => {
    e.preventDefault();

    dispatch(sendChat({
      name: 'Prashant Singh',
      message: enteredChat
    }))

    setEnteredChat("");

  }
  return (

    <>
      <div className="h-[650px] ml-4 w-9/12">
        {
          displaychats.map((chat,index)=>
          (
            <Chat key={index} name={chat.name} message={chat.message}/>
          ))
        }
       
      </div>
      <form onSubmit={addComment}>
        <input type="text"
          className="text-lg mt-4 w-72 p-4 rounded-lg shadow-lg border border-gray-400"
          value={enteredChat}
          onChange={setLiveMessage}
        />

        <button className="h-14 rounded-lg w-20 p-2 mt-4 ml-2 bg-green-300" >Send</button>
      </form>

    </>
  );
};

export default Livechats;
