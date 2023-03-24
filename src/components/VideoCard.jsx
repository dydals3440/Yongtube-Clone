import React from "react";
import { formatAgo } from "../util/date";

// 제목을 2줄 이상 안넘어가게 하고싶으면 tailwind clam를 설치해주고 config 수정필요

export default function VideoCard({ video }) {
  // 아래와 같이 선언하면 {video.snippet.title} => title 이렇게 사용가능
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      {/* w-full 지정된 부모 컨테이너를 꽉 채움 아이템하나하나가 */}
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
