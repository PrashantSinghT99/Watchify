import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Livechats from "./Livechats";
import CommentList from "./CommentList";
import { useDispatch } from "react-redux";
import { sideBarState } from "../utils/sideBarSlice";
const WatchPage = () => {
  const [videoFromId] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sideBarState());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <div className="ml-6">
          <iframe
            width="1100"
            height="650"
            src={"https://www.youtube.com/embed/" + videoFromId.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col">
          <div className="h-[650px] ml-4 w-96 border border-black">
            <Livechats />
          </div>
          
        </div>
      </div>
      <div className="w-[1100px] h-[500px] ml-6">
        <CommentList />
      </div>
    </div>
  );
};

export default WatchPage;
