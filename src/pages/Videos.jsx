import React from "react";
import { useQuery } from "react-query";
// useParams를 이용해 검색 키워드를 표기
import { useParams } from "react-router-dom";
import FakeYoutube from "../api/fakeYoutubeClient";
import VideoCard from "../components/VideoCard";
import Youtube from "../api/youtube";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    // 전체적인 videos라는 key안에, keyword별로 캐시가 되도록 만들어줌, 두번쨰 인자 어떻게 데이터 통신할 껀지 정의할 수 있는 콜백함수
    ["videos", keyword],
    () => youtube.search(keyword),
    { staleTime: 1000 * 60 * 1 }
  );
  return (
    <>
      {isLoading && <p>Loading....</p>}
      {error && <p>Something is Wrong 🙀</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
