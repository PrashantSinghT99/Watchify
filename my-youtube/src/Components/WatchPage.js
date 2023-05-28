import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Livechats from "./Livechats";
import CommentList from "./CommentList";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sideBarSlice";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { TbShare3, TbDots } from 'react-icons/tb';
import { TfiDownload } from "react-icons/tfi"
import { BsPersonCircle } from 'react-icons/bs';
import { API_KEY } from "../utils/constants";
const WatchPage = () => {
  const [videoFromId] = useSearchParams();
  const [channelDetails, setChannelDetails] = useState(null)
  const [videoStats, setVideoStats] = useState(null)
  const dispatch = useDispatch();
  const videoId = videoFromId.get("v");

  console.log(videoStats, channelDetails);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoIdDetails()
  }, [videoId])

  async function getVideoIdDetails() {
    const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${API_KEY}`)
    const jsonData = await data.json()
    setChannelDetails(jsonData.items[0].snippet)
    setVideoStats(jsonData.items[0].statistics)
  }

  function formatCount(count) {
    if (!count) {
      return;
    }
    if (count < 1000) {
      return count.toString();
    } else if (count >= 1000 && count < 1000000) {
      return (count / 1000).toFixed(1) + "K ";
    } else {
      return (count / 1000000).toFixed(1) + "M ";
    }
  }
  return (
    <div className="flex flex-col w-screen">
      <div className="flex">
        <div className="ml-6 md">
          <iframe
            className="w-[1100px] h-[700px] xl:w-[900px]  lg:w-[700px] md:w-[500px] sm:w-[370px] sm:h-[350px] xsm:w-[300px] xsm:h-[400px] mob:w-[175px] mob:h-[350px]"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            playing="true"
            allow="autoplay;accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className='flex justify-between flex-wrap md:flex-nowrap items-center md:gap-9 gap-3 mt-4'>
            <div className='flex justify-center gap-2 items-center'>
              <BsPersonCircle className='md:text-4xl text-2xl mb-1 cursor-pointer'></BsPersonCircle>
              <div className='flex flex-col'>
                <h2 className='font-semibold md:text-base text-lg'>{channelDetails?.channelTitle}</h2>
                <span className='text-lg text-stone-500'>4.21K subscribers</span>
              </div>
              <button className='bg-black text-white md:px-4 md:py-2 px-2 py-1 rounded-3xl md:text-sm text-[1rem] font-semibold md:ml-4'>Subscribe</button>
            </div>
            <div className='flex justify-center gap-2 pr-2 dark:text-black'>
              <div className='flex justify-center items-center'>
                <button className="bg-stone-100 font-semibold flex justify-center gap-2 items-center md:p-2 p-1 rounded-l-full border-r-2 border-stone-200 md:text-base text-lg hover:bg-stone-200"><AiOutlineLike className='md:text-2xl'></AiOutlineLike>{formatCount(videoStats?.likeCount)}</button>
                <button className="bg-stone-100 md:p-2 p-1 rounded-r-full hover:bg-stone-200 text-lg"><AiOutlineDislike className='md:text-2xl'></AiOutlineDislike></button>
              </div>
              <button className="bg-stone-100 font-semibold flex gap-1 items-center md:px-4 md:py-2 px-2 py-1 rounded-full md:text-base text-lg hover:bg-stone-200"><TbShare3 className='md:text-xl'></TbShare3> Share</button>
              <button className="bg-stone-100 font-semibold flex gap-1 items-center md:px-4 md:py-2 px-2 py-1 rounded-full hover:bg-stone-200 md:text-base text-lg"><TfiDownload></TfiDownload> Download</button>
              <button className="bg-stone-100 md:px-3 px-2 py-1 rounded-full hover:bg-stone-200 text-lg"><TbDots className='md:text-xl'></TbDots></button>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[650px] w-96 md:w-[250px] sm:h-[300px] sm:w-[225px] xsm:h-[450px] xsm:w-[200px]  mob:h-[300px] mob:w-[160px]  ml-4  border border-black">
            <Livechats />
          </div>

        </div>
      </div>
      <div className="w-[1100px] h-[1000px] xl:w-[900px]  lg:w-[800px] md:w-[450px] sm:w-[200px] sm:h-[350px] xsm:w-[200px] xsm:h-[250px] mob:w-[250px] mob:h-[150px] ml-6">
        <CommentList />
      </div>
    </div>
  );
};

export default WatchPage;
