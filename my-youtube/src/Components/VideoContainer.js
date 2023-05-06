import React, { useEffect, useState } from "react";
import { Videocard } from "./Videocard";
import { VIDEO_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [stateShimmer, setstateShimmer] = useState(true);

  useEffect(() => {
    getAllVideos();
  }, []);

  const getAllVideos = async () => {
    const data = await fetch(VIDEO_URL);
    const json = await data.json();
    setVideos(json.items);
    setstateShimmer(false);
  };

  return stateShimmer ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap overflow">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <Videocard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
