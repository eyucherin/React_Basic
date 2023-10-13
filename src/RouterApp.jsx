import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./page/NotFound";
import Videos from "./page/Videos";
import Root from "./page/Root";
import VideoDetail from "./page/VideoDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children:[
        {index:true,element:<div>Home</div>},
        {path:"videos",element:<Videos />},
        {path:"videos/:videoId",element:<VideoDetail />},
    ]
  },
]);

export default function RouterApp() {
  return <RouterProvider router={router} />;
}
