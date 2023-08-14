import useSWR from "swr"
import { getWeboHotSearch } from "@/service/weibo.ts"
import WeiboHotSearchItem, { HotSearchItemPlaceHolder } from "./WeiboHotSearchItem"
import { Seo } from "../Seo"

export default function Weibo() {
  const { data, isValidating } = useSWR('/api/weibo', getWeboHotSearch)

  return (
    <>
      <Seo title="微博热搜" />
      <div className="flex p-6 flex-col gap-2">
        <div className="flex font-semibold text-gray-400 text-sm">
          <div className="ml-4 mr-6">序号</div>
          <div>关键词</div>
        </div>
        {
          isValidating ?
            (new Array(50).fill(0)).map((_, index) => <HotSearchItemPlaceHolder key={index} />) :
            data?.data?.data.realtime.map(item => <WeiboHotSearchItem key={item.word} item={item} />)
        }
      </div>
    </>
  )
}