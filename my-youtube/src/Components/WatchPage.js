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
    <div className="flex flex-col w-screen">
      <div className="flex">
        <div className="ml-6 md">
          <iframe
            className="w-[1100px] h-[700px] xl:w-[550px]  lg:w-[550px] md:w-[450px] sm:w-[300px] sm:h-[350px] xsm:w-[250px] xsm:h-[250px] mob:w-[200px] mob:h-[150px]"
            src={"https://www.youtube.com/embed/" + videoFromId.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col">
          <div className="h-[650px] w-96 md:w-[250px] sm:h-[300px] sm:w-[250px] xsm:h-[300px] xsm:w-[200px]  mob:h-[300px] mob:w-[200px]  ml-4  border border-black">
            <Livechats />
          </div>
          
        </div>
      </div>
      <div className="w-[1100px] h-[1000px] xl:w-[550px]  lg:w-[550px] md:w-[450px] sm:w-[300px] sm:h-[350px] xsm:w-[250px] xsm:h-[250px] mob:w-[150px] mob:h-[150px] ml-6">
        <CommentList />
      </div>
    </div>
  );
};

export default WatchPage;
