import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AdSetup from "../pages/adSetup/AdSetup";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import Categories from "../pages/categories/Categories";
import City from "../pages/city/City";
import Country from "../pages/country/Country";
import Featured from "../pages/featured/Featured";
import CategoriesForm from "../pages/forms/CategoriesForm";
import FeaturedFrom from "../pages/forms/FeaturedFrom";
import UserProfileForm from "../pages/forms/UserProfileForm";
import Home from "../pages/home/Home";
import Hotel from "../pages/hotel/Hotel";
import NotificationAdd from "../pages/notifications/NotificationAdd";
import Notifications from "../pages/notifications/Notifications";
import Place from "../pages/place/Place";
import Profile from "../pages/profile/Profile";
import Restaurants from "../pages/restaurants/Restaurants";
import Settings from "../pages/settings/Settings";
import State from "../pages/state/State";
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
      // place

      {
        path: "/place",
        element: <Place></Place>,
      },
      {
        path: "/hotel",
        element: <Hotel></Hotel>,
      },
      {
        path: "/restaurants",
        element: <Restaurants></Restaurants>,
      },
      // geography
      {
        path: "/country",
        element: <Country></Country>,
      },
      {
        path: "/state",
        element: <State></State>,
      },
      {
        path: "/city",
        element: <City></City>,
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
        path: "/add-notification",
        element: <NotificationAdd></NotificationAdd>,
      },
      {
        path: "/send-notification",
        element: <Notifications></Notifications>,
      },

      {
        path: "/settings",
        element: <Settings></Settings>,
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
        element: <NotificationAdd></NotificationAdd>,
      },
      {
        path: "/user-edit",
        element: <UserProfileForm></UserProfileForm>,
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
    path: "/register",
    element: <Registration></Registration>,
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
