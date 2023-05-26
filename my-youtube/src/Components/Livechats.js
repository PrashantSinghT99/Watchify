import React, { useEffect, useState } from "react";
import Chat from './Chat'
import { useDispatch, useSelector } from 'react-redux'
import { sendChat } from "../utils/liveChatSlice";
import { generateRandomName } from '../utils/constants'
import { randomMessageGenerator } from '../utils/constants'
import { getRandomEmoji } from '../utils/constants'
import { AiOutlineSend } from 'react-icons/ai'
const Livechats = () => {
  const [enteredChat, setEnteredChat] = useState("");
  const displaychats = useSelector((store) => store.liveChatSlice.chatsArray);


  useEffect(() => {
    const time = setInterval(() => {
      dispatch(
        sendChat({
          name: generateRandomName(),
          message: randomMessageGenerator() + getRandomEmoji(),
        })
      )
    }, 1000);

    return () => clearTimeout(time);
  }, [])

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
      <div className="h-[650px]  ml-4 mob:ml-0 w-9/12 md:w-[250px] sm:h-[300px] sm:w-[250px] xsm:h-[300px] xsm:w-[200px] mob:h-[300px] mob:w-[200px]   overflow-hidden flex flex-col-reverse">
        {
          displaychats.map((chat, index) =>
          (
            <Chat key={index} name={chat.name} message={chat.message} />
          ))
        }

      </div>
      <form onSubmit={addComment}>
        <input type="text"
          className="text-lg mt-4 w-70 md:w-60 xsm:w-36 mob:w-30 p-4 rounded-lg shadow-lg border border-gray-400"
          value={enteredChat}
          onChange={setLiveMessage}
        />

        <button className="h-14 rounded-lg w-20  mob:w-12 p-2 mt-4 ml-2 " ><AiOutlineSend className='text-2xl text-blue-600 cursor-pointer' ></AiOutlineSend></button>
      </form>

    </>
  );
};

export default Livechats;
