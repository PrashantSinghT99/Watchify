import React from 'react'
import { useSelector } from 'react-redux';
const Sidebar = () => {

  const open = useSelector((store) => store.sideBarSlice.open)

  if (!open) return null;

  return <div className="pl-20 shadow-xl w-[210rem] text-lg mt-10">
    <ul>
      <li>
        <h1>Home</h1>
      </li>
      <li>
        <h1>Demo</h1>
      </li>
      <li> Shorts</li>
      <li> Videos</li>
      <li> Live</li>
    </ul>
    <h1 className="font-bold pt-5">Subscriptions</h1>
    <ul>
      <li> Music</li>
      <li> Sports</li>
      <li> Gaming</li>
      <li> Movies</li>
    </ul>
    <h1 className="font-bold pt-5">Watch Later</h1>
    <ul>
      <li> Music</li>
      <li> Sports</li>
      <li> Gaming</li>
      <li> Movies</li>
    </ul>
  </div>
}

export default Sidebar