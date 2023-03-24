import React from "react";
import { formatAgo } from "../util/date";

export default function VideoCard({ video }) {
  // 아래와 같이 선언하면 {video.snippet.title} => title 이렇게 사용가능
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
