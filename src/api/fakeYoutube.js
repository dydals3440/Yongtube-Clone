import axios from "axios";

export default class FakeYoutube {
  // 생성할 떄 아무것도 전달해주지 않아도 됨.
  constructor() {}
  async search(keyword) {
    // # private은 클래스 내부적으로 호출이 가능하나 외부적으로는 호출 x
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  //   이미 지정된 검색 결과의 json을 사용할것이기에 (keyword) 가 필요 없기에 ()로 놨둔다.
  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #mostPopular() {
    return axios.get(`/videos/popular.json`);
  }
}
