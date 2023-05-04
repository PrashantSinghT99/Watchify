import React, { useEffect, useState } from 'react'
import  {Videocard}  from './Videocard'
import { VIDEO_URL } from '../utils/constants';
import Shimmer from './Shimmer';
const VideoContainer = () => {

const [videos,setVideos]=useState([]);
const [stateShimmer,setstateShimmer]=useState(true);
useEffect(()=>{
getAllVideos();
},[])

const getAllVideos=async()=>
{
 const data=await fetch(VIDEO_URL);
 const json=await data.json();
 setVideos(json.items);
 setstateShimmer(false);
}

  return (
stateShimmer?<Shimmer/>:
    (<div className='flex flex-wrap overflow'>
      {
        videos.map((video)=>(
          <Videocard key={video.id} video={video}/>
        ))
      }
    </div>)
  )
}

export default VideoContainer