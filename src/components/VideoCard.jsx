import React from "react";
// 경로 이동을 위해 useNavigate 사용 (비디오 클릭시)
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

// 제목을 2줄 이상 안넘어가게 하고싶으면 tailwind clam를 설치해주고 config 수정필요

export default function VideoCard({ video, type }) {
  // 아래와 같이 선언하면 {video.snippet.title} => title 이렇게 사용가능
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";
  return (
    <li
      className={isList ? "flex gap-1 m-2" : ""}
      onClick={() => {
        // 경로로 이동해서 해당 video.id에 관련된 네트워크 통신을해서 상세 설명을 갖고 오는 것이 아닌, 이미 video에 대한 모든 정보가 함수 옆에 video에 있기에 이것 또한 함께 전달해주면 됩니다.
        // react-router에서 부가적인 정보를 전달할떄는 두번째 인자에 객체를 전달해주면 됩니다. state: {video: video} 가 생략된 것 입니다.
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      {/* w-full 지정된 부모 컨테이너를 꽉 채움 아이템하나하나가 */}
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
