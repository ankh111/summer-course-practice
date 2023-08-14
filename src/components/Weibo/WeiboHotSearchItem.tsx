import { Realtime } from "@/service/weibo";
import clsx from "clsx";

export default function WeiboHotSearchItem({
  item,
}: {
  item: Realtime
}) {
  return (
    <div className="w-full min-h-[2rem] flex items-center gap-2 rounded hover:bg-gray-100 transition-colors">
      <div className="mx-6 flex items-center">
          {
            item.realpos ?
              <div className={clsx("text-sm font-semibold", item.realpos > 3 ? 'text-orange-400' : 'text-red-500')}>{item.realpos}</div> :
              <div className="rounded-full bg-orange-400 w-1 h-1 mx-0.5"></div>
          }
      </div>
      <div className="flex flex-1 gap-2 items-center">
        <a
          className="cursor-pointer text-sky-600 hover:underline"
          onClick={() => window.open(`https://s.weibo.com/weibo?q=${item.word}`, 'blank')}
        >{item.word}</a>
        <div className="text-gray-400 text-xs">{item.flag_desc}</div>
        <div className="text-gray-400 text-xs">{item.raw_hot}</div>
      </div>
      <div className="w-1/6 flex">
        <div
          className="text-white p-0.5 rounded-sm text-xs"
          style={{
            backgroundColor: item.icon_desc_color
          }}
        >{item.icon_desc}</div>
      </div>
    </div>
  )
}

export function HotSearchItemPlaceHolder() {
  return (
    <div className="animate-pulse w-full min-h-[2rem] flex items-center gap-2 rounded">
      <div className="h-6 w-6 mx-4 rounded bg-slate-200"/>
      <div className="flex-1">
        <div className="w-2/5 h-6 rounded bg-slate-200"></div>
      </div>
      <div className="w-1/5">
        <div className="w-6 h-6 rounded bg-slate-200"></div>
      </div>
    </div>
  )
}