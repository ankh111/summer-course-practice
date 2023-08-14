import useSWR from "swr"
import { getBaiduHotSearch } from "@/service/baidu"
import BaiduHotSearchItem, { BaiduHotSearchItemPlaceholder } from "./BaiduHotSearchItem"
import { Seo } from "../Seo"

export default function Baidu() {
  const { data, isValidating } = useSWR('/api/baidu', getBaiduHotSearch)

  return (
    <div>
      <Seo title="百度热搜" />
      {
        isValidating ?
          (new Array(30).fill(0)).map((_, index) => <BaiduHotSearchItemPlaceholder key={index} />) :
          data?.data?.cards[0].content.filter(item => !item.isTop).map(item => <BaiduHotSearchItem key={item.url} item={item}/>)
      }
    </div>
  )
}