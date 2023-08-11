import { request } from "./request";

export async function getBaiduHotSearch() {
  (await request('https://top.baidu.com/board?tab=realtime')).text().then((data) => {
    console.log(data);
  })
}