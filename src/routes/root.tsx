import { ReactNode } from "react";
import clsx from "clsx";
import Icons from "@/components/Icons";
import Layout from "@/layout/Layout";
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import useSWR, { useSWRConfig } from "swr";

const TabOptions: {
  path: string;
  api: string;
  name: ReactNode;
}[] = [
  {
    path: '/weibo',
    api: '/api/weibo',
    name: <div className="flex items-center gap-2"><Icons.Webo/><span className="font-semibold">微博热搜</span></div>,
  },
  {
    path: '/baidu',
    api: '/api/baidu',
    name: <div className="flex items-center gap-2"><Icons.Baidu/><span className="font-semibold">百度热搜</span></div>,
  }
]

export default function Root() {
  const location = useLocation();
  const apiKey = TabOptions.find(item => item.path === location.pathname)?.api
  const { data, isValidating } = useSWR(apiKey)
  const { mutate } = useSWRConfig()

  if (location.pathname === '/') {
    return <Navigate replace to={TabOptions[0].path} />
  }

  return (
    <Layout>
      <div className="w-full flex gap-6 relative bg-gray-50-50">
        <div className="sticky flex flex-col top-8 h-[calc(100vh-4rem)] w-[250px] p-4 bg-white rounded-md">
          <div className="flex-1">
            {
              TabOptions.map(tab => {
                return (
                  <Link
                    key={tab.path}
                    to={tab.path}
                    className={clsx('mb-2 flex min-h-[36px] cursor-pointer items-center justify-center gap-2 rounded-md bg-transparent px-2 font-sans text-sm font-medium transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-transparent', location.pathname === tab.path && '!bg-slate-100')}
                  >{tab.name}</Link>
                )
              })
            }
          </div>
          <div className="text-xs text-center">
            {!!data?.time && <div className="mb-2">更新时间：<strong>{new Date(data.time).toLocaleTimeString()}</strong></div>}
            <div
              className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors"
              onClick={() => !isValidating && mutate(apiKey)}
            >{ isValidating ? '请求中...' : '重新请求'}</div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-md">
          <Outlet/>
        </div>
      </div>
    </Layout>
  )
}