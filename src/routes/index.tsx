import { createBrowserRouter } from "react-router-dom";
import Root from "@/routes/root";
import WeiboHotSearch from "@/components/WeiboHotSearch";
import BaiduHotSearch from "@/components/BaiduHotSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: 'weibo',
        element: <WeiboHotSearch/>,
      },
      {
        path: 'baidu',
        element: <BaiduHotSearch/>
      }
    ]
  },
]);

export default router;