import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import States from "../Components/States";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";

 const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement:<ErrorPage/>,
    hydrateFallbackElement:<p>Loading..........</p>,
    children:[
        {
            path:"/",
            Component:Home
        },
        
         {
            path:"/apps",
            Component:Apps
        },
         {
            path:"/install",
            Component:Installation
        },
         {
            path:"/app/:id",
            Component:AppDetails
        }
    ]
  },
]);
export default router