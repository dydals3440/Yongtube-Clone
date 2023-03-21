import axios from "axios";

export default class FakeYoutube {
  // 생성할 떄 아무것도 전달해주지 않아도 됨.
  constructor() {}
  async search(keyword) {
    // # private은 클래스 내부적으로 호출이 가능하나 외부적으로는 호출 x
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return axios
      .get(`/videos/search.json`)
      .then((res) =>
        res.data.items.then((items) =>
          items.map((item) => ({ ...items, id: item.id.videoId }))
        )
      );
  }
  async #mostPopular(keyword) {
    return axios.get(`/videos/popular.json`);
  }
}

// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? "search" : "popular"}.json`)
//     .then((res) => res.data.items);
// }
