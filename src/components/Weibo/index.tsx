import useSWR from "swr"
import { getWeboHotSearch } from "@/service/weibo.ts"
import WeiboHotSearchItem, { HotSearchItemPlaceHolder } from "./WeiboHotSearchItem"

export default function Weibo() {
  const { data, isLoading } = useSWR('/api/weibo', getWeboHotSearch)

  return (
    <div className="flex p-6 flex-col gap-2">
      <div className="flex font-semibold text-gray-400 text-sm">
        <div className="ml-4 mr-6">序号</div>
        <div>关键词</div>
      </div>
      {
        isLoading ?
          (new Array(50).fill(0)).map((_, index) => <HotSearchItemPlaceHolder key={index} />) :
          data?.data.realtime.map(item => <WeiboHotSearchItem key={item.word} item={item} />)
      }
    </div>
  )
}