import useSWR from "swr"
import { getWeiBoHotSearch } from "@/service/weibo.ts"
import HotSearchItem, { HotSearchItemPlaceHolder } from "./HotSearchItem"

export default function WeiBoHotSearch() {
  const { data, isLoading } = useSWR('/api/weibo', getWeiBoHotSearch)

  return (
    <div className="flex p-6 flex-col gap-2">
      <div className="flex font-semibold text-gray-400 text-sm">
        <div className="ml-4 mr-6">序号</div>
        <div>关键词</div>
      </div>
      {
        isLoading ?
          (new Array(50).fill(0)).map((_, index) => <HotSearchItemPlaceHolder key={index} />) :
          data?.data.realtime.map(item => <HotSearchItem key={item.word} item={item} />)
      }
    </div>
  )
}