import React from "react";
import { useQuery } from "react-query";
// useParams를 이용해 검색 키워드를 표기
import { useParams } from "react-router-dom";
import FakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    // 전체적인 videos라는 key안에, keyword별로 캐시가 되도록 만들어줌, 두번쨰 인자 어떻게 데이터 통신할 껀지 정의할 수 있는 콜백함수
    ["videos", keyword],
    () => {
      const youtube = new Youtube();
      youtube.search(keyword);
    }
  );
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
