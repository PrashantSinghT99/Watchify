import React, { useEffect, useState } from 'react'
import { Videocard } from './Videocard'
import { VIDEO_URL } from './utils/constants';
const VideoContainer = () => {

const [videos,setVideos]=useState([]);

useEffect(()=>{
getAllVideos();
},[])

const getAllVideos=async()=>
{
 const data=await fetch(VIDEO_URL);
 const json=await data.json();
 setVideos(json.items);
}

  return (
    <div className='flex flex-wrap overflow'>
      {
        videos.map((video)=>(
          <Videocard key={video.id} video={video}/>
        ))
      }
     
    </div>
  )
}

export default VideoContainer