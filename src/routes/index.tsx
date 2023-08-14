import { createBrowserRouter } from "react-router-dom";
import Root from "@/routes/root";
import Weibo from "@/components/Weibo";
import Baidu from "@/components/Baidu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: 'weibo',
        element: <Weibo/>,
      },
      {
        path: 'baidu',
        element: <Baidu/>
      }
    ]
  },
]);

export default router;