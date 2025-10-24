import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import Layout from "../Layouts/Layout";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";
import Installedapps from "../Pages/InstalledApps";

const router=createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    errorElement: <ErrorPage />,
    children:[
  {
    index:true,
    Component:Home
  },
  {
    path:'/apps',
    Component:Apps
  },
  {
    path:'/installedApps',
    Component:Installedapps
  },
  {
        path: '/app/:id',
        element: <AppDetails/>
      },
  {
        path: '*',
        element: <ErrorPage/>
      },
    ]
  }
])

export default router