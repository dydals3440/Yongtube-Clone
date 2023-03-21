import React from "react";
import { useQuery } from "react-query";
// useParams를 이용해 검색 키워드를 표기
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { search } from "../api/youtube";

export default function VideosAxios() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => search(keyword));
  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥HotTrend Video"}</div>
      {isLoading && <p>Loading....</p>}
      {error && <p>Something is Wrong 🙀</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
