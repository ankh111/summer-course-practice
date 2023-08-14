import { BaiduHotSearchResult } from "../../functions/api/baidu";
import request from "./request";

export async function getBaiduHotSearch() {
  return request<{
    time: number;
    data: BaiduHotSearchResult | null;
  }>('/api/baidu').then(res => res?.data)
}