import React from 'react'

export const Videocard = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minuteInMs = 60 * 1000;
    const hourInMs = 60 * minuteInMs;
    const dayInMs = 24 * hourInMs;
    const yearInMs = 365 * dayInMs;
    const monthInMs = 30 * dayInMs;

    if (diff < minuteInMs) {
      return "just now";
    } else if (diff < hourInMs) {
      const minutes = Math.floor(diff / minuteInMs);
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else if (diff < dayInMs) {
      const hours = Math.floor(diff / hourInMs);
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (diff < monthInMs) {
      const days = Math.floor(diff / dayInMs);
      return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (diff < yearInMs) {
      const months = Math.floor(diff / monthInMs);
      return months === 1 ? "1 month ago" : `${months} months ago`;
    } else {
      const years = Math.floor(diff / yearInMs);
      return years === 1 ? "1 year ago" : `${years} years ago`;
    }
  }
  //console.log(video)
  return (
    <div className='p-2 m-2 w-72 h-80 shadow-lg'>
      <img className='w-[400px]' src={thumbnails.medium.url} alt="videoThumbnail" />
      <h1 className='font-bold py-1'>{title.substring(0,60)}</h1>
      <p>{channelTitle}</p>
      <p>{Math.trunc(statistics.viewCount)} views</p>
      <p>{timeAgo(publishedAt)}</p>
    </div>
  )
}
