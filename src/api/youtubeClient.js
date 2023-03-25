import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }
  async search({ params }) {
    // return params.relatedToVideoId
    //   ? axios.get(`/videos/related.json`)
    //   : axios.get("/videos/search.json");
    return axios.get(
      `/videos/${params.relatedToVideoId ? "related" : "search"}.json`
    );
  }
  async videos(params) {
    return this.httpClient.get("videos", params);
  }
  async channels(params) {
    return this.httpClient.get("channels", params);
  }
}
