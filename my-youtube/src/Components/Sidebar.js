import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
const Sidebar = () => {

  const open = useSelector((store) => store.sideBarSlice.open)

  if (!open) return null;
  // p-5 shadow-lg w-48
  // pl-20 shadow-xl w-[210px] h-full text-lg mt-10
  return <div className="p-5 shadow-lg w-48">
    <ul>
      <li>
        <Link to='/'>Home</Link>
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