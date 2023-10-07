import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ActiveProducts from "../pages/activeProducts/ActiveProducts";
import AdSetup from "../pages/adSetup/AdSetup";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import Categories from "../pages/categories/Categories";
import City from "../pages/city/City";
import Customers from "../pages/customers/Customers";
import Featured from "../pages/featured/Featured";
import CategoriesForm from "../pages/forms/CategoriesForm";
import FeaturedFrom from "../pages/forms/FeaturedFrom";
import UserProfileForm from "../pages/forms/UserProfileForm";
import AddProduct from "../pages/forms/products/AddProduct";
import EditProduct from "../pages/forms/products/EditProduct";
import AddSalesPerson from "../pages/forms/salesPerson/AddSalesPerson";
import UpdateSalesPerson from "../pages/forms/salesPerson/UpdateSalesPerson";
import Home from "../pages/home/Home";
import NotificationAdd from "../pages/notifications/NotificationAdd";
import Notifications from "../pages/notifications/Notifications";
import PausedProducts from "../pages/pausedProducts/PausedProducts";
import Profile from "../pages/profile/Profile";
import Sales from "../pages/sales/Sales";
import SalesPerson from "../pages/salesPerson/SalesPerson";
import Settings from "../pages/settings/Settings";
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

      // place

      {
        path: "/active-products",
        element: <ActiveProducts></ActiveProducts>,
      },
      {
        path: "/paused-products",
        element: <PausedProducts></PausedProducts>,
      },
      // sales
      {
        path: "/sales",
        element: <Sales></Sales>,
      },
      // customers

      {
        path: "/customers",
        element: <Customers></Customers>,
      },
      {
        path: "/sales-person",
        element: <SalesPerson></SalesPerson>,
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
        path: "/add-sales-person",
        element: <AddSalesPerson></AddSalesPerson>,
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/edit-product",
        element: <EditProduct></EditProduct>,
      },
      {
        path: "/update-sales-person",
        element: <UpdateSalesPerson></UpdateSalesPerson>,
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
