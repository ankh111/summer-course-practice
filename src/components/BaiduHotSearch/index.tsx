import useSWR from "swr"
import { getBaiduHotSearch } from "@/service/baidu"
import BaiduHotSearchItem, { BaiduHotSearchItemPlaceholder } from "./BaiduHotSearchItem"

export default function BaiduHotSearch() {
  const { data, isLoading } = useSWR('/api/baidu', getBaiduHotSearch)

  return (
    <div>
      {
        isLoading ?
          (new Array(30).fill(0)).map((_, index) => <BaiduHotSearchItemPlaceholder key={index} />) :
          data?.cards[0].content.filter(item => !item.isTop).map(item => <BaiduHotSearchItem key={item.url} item={item}/>)
      }
    </div>
  )
}