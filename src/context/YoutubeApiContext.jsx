import { createContext, useContext } from "react";
import FakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();

const youtube = new FakeYoutube(); // 실제 데이터 new Youtube();

// 이 우산 provider에서는 실제의 Youtube Api를 사용하는 인스턴스를 한번 만들어서
// value에다 저장해둘것임. 사용하는 곳에서 Provider안에 있는 어떤 자식 컴포넌트에서도
// useYoutubeApi함수를 이용하면 value값에 접근할 수 있도록 밑에 함수 생성.
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
