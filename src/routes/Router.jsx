import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ActiveProducts from "../pages/activeProducts/ActiveProducts";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import Customers from "../pages/customers/Customers";
import AddProduct from "../pages/forms/products/AddProduct";
import EditProduct from "../pages/forms/products/EditProduct";
import AddSalesPerson from "../pages/forms/salesPerson/AddSalesPerson";
import UpdateSalesPerson from "../pages/forms/salesPerson/UpdateSalesPerson";
import Home from "../pages/home/Home";
import PausedProducts from "../pages/pausedProducts/PausedProducts";
import Profile from "../pages/profile/Profile";
import Sales from "../pages/sales/Sales";
import SalesPerson from "../pages/salesPerson/SalesPerson";
import Settings from "../pages/settings/Settings";
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
