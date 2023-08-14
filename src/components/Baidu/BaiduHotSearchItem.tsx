import clsx from "clsx";
import { BaiduHotSearchContent } from "../../../functions/api/baidu";

export default function BaiduHotSearchItem({
  item,
}: {
  item: BaiduHotSearchContent;
}) {
  return (
    <div className="w-full flex gap-6 p-3 hover:bg-gradient-to-b from-gray-100 to-white">
      <a className="w-[128px] h-[85px] overflow-hidden rounded-xl relative" href={item.url} target="_blank">
        <img
          className="w-full h-full object-cover"
          src={item.img}
        />
        <div
          style={{
            borderRadius: '8px 1px 8px 1px'
          }}
          className={clsx("absolute left-0 top-0 text-center w-5 h-5 text-white", item.index === 0 && 'bg-red-500', item.index === 1 && 'bg-orange-500', item.index > 1 && 'bg-yellow-500')}
        >{item.index + 1}</div>
      </a>
      <div className="flex-1">
        <div
          className="my-2 flex items-center gap-2 font-semibold cursor-pointer overflow-ellipsis overflow-hidden hover:text-blue-500"
          onClick={() => window.open(item.url)}
        >
          {item.word} {item.hotTag === '3' && <div className="bg-orange-400 rounded leading-5 font-light text-white w-5 h-5 text-xs text-center">热</div>}
        </div>
        <div className="text-gray-600 text-sm">
          {item.desc}
        </div>
      </div>
      <div className="text-center pt-4 w-[150px]  text-sm border-l-gray-100 border-l-2">
        <div className="mb-2 text-gray-500">{item.hotScore}</div>
        <div className="text-gray-400">热搜指数</div>
      </div>
    </div>
  )
} 

export function BaiduHotSearchItemPlaceholder() {
  return (
    <div className="animate-pulse w-full flex gap-6 p-3 items-center">
      <div className="w-[128px] h-[85px] bg-slate-200"></div>
      <div className="flex-1">
        <div className="w-2/5 h-6 mb-2 bg-slate-200"></div>
        <div className="w-4/5 h-8 bg-slate-200"></div>
      </div>
      <div className="w-[150px]">
        <div className="w-4/5 h-4 mb-2 bg-slate-200"></div>
        <div className="w-4/5 h-4 bg-slate-200"></div>
      </div>
    </div>
  )
}