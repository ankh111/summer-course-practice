import { WeboHotSearchResult } from "../../functions/api/weibo";
import request from "./request";

export async function getWeboHotSearch() {
  return request<{
    data: WeboHotSearchResult,
    time: number;
  }>('/api/weibo').then(res => res?.data)
}