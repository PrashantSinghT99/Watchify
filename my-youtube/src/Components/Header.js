import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VIDEO_SEARCH_API } from "../utils/constants";
import { sideBarState } from "../utils/sideBarSlice";
import {searchCached}  from "../utils/searchCachingSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [searchVideo, setsearchVideo] = useState([]);
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.searchCachingSlice);

  const handleSidebar = () => {
    dispatch(sideBarState());
  };

  useEffect(() => {

    const timer = setTimeout(() => {

      if (searchCache[searchVideo]) {
        setsuggestions(searchCache[searchVideo])
      }
      else {
        searchApiCall();
      }
    }, 500)

    return () => clearTimeout(timer)

  }, [searchVideo]);

  const searchApiCall = async () => {

    console.log("api call")
    const data = await fetch(VIDEO_SEARCH_API + searchVideo);
    const json = await data.json();
    // console.log(json[1]);
    setsuggestions(json[1]);
    //if search not in cache then dispatch and store in cache

    dispatch(
      searchCached({
        [searchVideo]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col md:items-center shadow-lg items-center">
      <div className="pl-4 mob:pl-1" onClick={handleSidebar}>
        <img
          src="https://banner2.cleanpng.com/20180622/fh/kisspng-hamburger-button-menu-computer-icons-united-states-menue-5b2cdfed090519.945165391529667565037.jpg"
          className="h-8 w-8"
        ></img>
      </div>
      <div>
        <img
          src="data:image/png;base64,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"
          alt="logo"
          className="h-20 w-40"
        />
      </div>
      {/* search  */}
      <div className="flex">
        <div>
          <input
            type="text"
            className="w-[600px] px-4 py-2 border border-gray-600 rounded-l-full md:w-[400px] sm:w-[150px] xsm:w-[150px] mob:w-[150px]"
            value={searchVideo}
            onChange={(e) => setsearchVideo(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className="border border-gray-400 px-5 py-2 rounded-r-full mob:px-1 bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute mt-11
   bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&usqp=CAU"
          alt="userLogo"
          className="h-10 w-10"
        />
      </div>
    </div>
  );
};

export default Header;
