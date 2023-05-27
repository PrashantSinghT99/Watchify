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
    <div className="p-5 shadow-lg w-48 text-black text-center text-lg">
      <ul>
<li><Link className="flex items-center justify-start mt-6 gap-4" to="/"><MdHomeFilled></MdHomeFilled>Home</Link></li> 
     <li className="flex items-center mt-6 justify-start gap-4"><HiMusicNote></HiMusicNote>Music</li>
     <li className="flex items-center mt-6 justify-start gap-4"><RxVideo></RxVideo>Shorts</li>
     <li className="flex items-center mt-6 justify-start gap-4"><BsNewspaper></BsNewspaper>News&Politics</li>
     <li className="flex items-center mt-6 justify-start gap-4"><MdSportsCricket></MdSportsCricket>Sports</li>
     <li className="flex items-center mt-6 justify-start gap-4"><MdTheaterComedy></MdTheaterComedy>Comedy</li>
     <li className="flex items-center mt-6 justify-start gap-4"><MdTravelExplore></MdTravelExplore>Travel&Events</li>
     <li className="flex items-center mt-6 justify-start gap-4"><MdMovie></MdMovie>Movies</li>                             
      </ul>
    </div>
  );
};

export default Sidebar;


