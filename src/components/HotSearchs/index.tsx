import { ReactNode, useState } from "react";
import WeiBoHotSearch from "../WeiBoHotSearch"
import clsx from "clsx";
import Icons from "../Icons";

const TabOptions: {
  key: string;
  name: ReactNode;
  component: ReactNode;
}[] = [
  {
    key: 'weibo',
    name: <div className="flex items-center gap-2"><Icons.WeiBo/><span className="font-semibold">微博热搜</span></div>,
    component: <WeiBoHotSearch/>,
  },
  {
    key: 'baidu',
    name: <div className="flex items-center gap-2"><Icons.BaiDu/><span className="font-semibold">百度热搜</span></div>,
    component: null,
  }
]

export default function HotSearchs() {
  const [activeTab, setActiveTab] = useState(TabOptions[0])

  return (
    <div className="w-full flex gap-6 relative bg-gray-50-50">
      <div className="sticky top-8 h-[calc(100vh-4rem)] w-[250px] p-4 bg-white rounded-md">
        {
          TabOptions.map(tab => {
            return (
              <div
                key={tab.key}
                className={clsx('mb-2 flex min-h-[36px] cursor-pointer items-center justify-center gap-2 rounded-md bg-transparent px-2 font-sans text-sm font-medium transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-transparent', activeTab.key === tab.key && '!bg-slate-100')}
                onClick={() => setActiveTab(tab)}
              >{tab.name}</div>
            )
          })
        }
      </div>
      <div className="flex-1 bg-white rounded-md">
        {activeTab.component}
      </div>
    </div>
  )
}