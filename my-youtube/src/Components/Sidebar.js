import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiMusicNote } from "react-icons/hi";
import { BsNewspaper } from "react-icons/bs";
import { RxVideo } from "react-icons/rx";
import {
  MdHomeFilled,
  MdSportsCricket,
  MdTheaterComedy,
  MdTravelExplore,
  MdMovie,
} from "react-icons/md";
const Sidebar = () => {
  const open = useSelector((store) => store.sideBarSlice.open);

  if (!open) return null;
  // p-5 shadow-lg w-48
  // pl-20 shadow-xl w-[210px] h-full text-lg mt-10
  return (
    <div className="p-5 shadow-lg w-48 text-black text-center">
      <ul>
        <li><Link to="/"><MdHomeFilled></MdHomeFilled>Home</Link></li>
        <li><HiMusicNote></HiMusicNote>Music</li>
        <li><RxVideo></RxVideo>Shorts</li>
        <li><BsNewspaper></BsNewspaper>News & Politics</li>
        <li><MdSportsCricket></MdSportsCricket>Sports</li>
        <li><MdTheaterComedy></MdTheaterComedy>Comedy</li>
        <li><MdTravelExplore></MdTravelExplore>Travel & Events</li>
        <li><MdMovie></MdMovie>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;


