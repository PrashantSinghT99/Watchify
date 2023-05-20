import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Livechats from "./Livechats";
import CommentList from "./CommentList";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sideBarSlice";
const WatchPage = () => {
  const [videoFromId] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-screen">
      <div className="flex">
        <div className="ml-6 md">
          <iframe
            className="w-[1100px] h-[700px] xl:w-[900px]  lg:w-[700px] md:w-[500px] sm:w-[370px] sm:h-[350px] xsm:w-[300px] xsm:h-[400px] mob:w-[175px] mob:h-[350px]"
            src={"https://www.youtube.com/embed/" + videoFromId.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
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
