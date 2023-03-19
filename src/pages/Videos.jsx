import React from "react";
// useParams를 이용해 검색 키워드를 표기
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  return <div>Videos {keyword ? `🔍${keyword}` : "🔥HotTrend Video"}</div>;
}
