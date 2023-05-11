import React from 'react'

export const Videocard = ({video}) => {
    const { snippet, statistics } = video;
    const { channelTitle, title, thumbnails } = snippet;

    return (
    <div className='p-2 m-2 w-72 shadow-lg'>
    <img className='w-[400px]' src={thumbnails.medium.url} alt="videoThumbnail"/>
    <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{Math.trunc(statistics.viewCount)} views</li>
    </ul>
    </div>
  )
}
