import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AdSetup from "../pages/adSetup/AdSetup";
import Login from "../pages/authentication/Login";
import Categories from "../pages/categories/Categories";
import Featured from "../pages/featured/Featured";
import CategoriesForm from "../pages/forms/CategoriesForm";
import FeaturedFrom from "../pages/forms/FeaturedFrom";
import NotificationForm from "../pages/forms/NotificationForm";
import Home from "../pages/home/Home";
import Notifications from "../pages/notifications/Notifications";
import Profile from "../pages/profile/Profile";
import Users from "../pages/users/Users";
import WallpaperRequest from "../pages/wallpaperRequest/WallpaperRequest";
import Wallpapers from "../pages/wallpapers/Wallpapers";
import PrivateRouter from "./PrivateRouter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout></Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/wallpaper-requests",
        element: <WallpaperRequest></WallpaperRequest>,
      },
      {
        path: "/wallpapers",
        element: <Wallpapers></Wallpapers>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/featured",
        element: <Featured></Featured>,
      },
      {
        path: "/ad-setup",
        element: <AdSetup></AdSetup>,
      },
      {
        path: "/notification",
        element: <Notifications></Notifications>,
      },

      // forms
      {
        path: "/category-add",
        element: <CategoriesForm></CategoriesForm>,
      },
      {
        path: "/category-edit",
        element: <CategoriesForm></CategoriesForm>,
      },
      {
        path: "/featured-add",
        element: <FeaturedFrom></FeaturedFrom>,
      },
      {
        path: "/notification-add",
        element: <NotificationForm></NotificationForm>,
      },
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register></Register>,
  // },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);
