import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko.js";

register("ko", koLocale);

// 별도로, lang 적용하지 않으면 en 영어로 설정
export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}
