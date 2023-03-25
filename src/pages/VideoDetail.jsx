import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="390"
          src={`http://www.youtube.com/embed/${video.id}`}
          title="youtube player"
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          {/* 글자를 컨테이너에 맞춰서 래핑해줘야, flex-basis 제대로 적용 */}
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <sections className="basis-2/6">
        <RelatedVideos id={video.id} />
      </sections>
    </section>
  );
}
