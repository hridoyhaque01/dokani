import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setActivePath } from "../features/path/pathSlice";

export default function useGetActivePath() {
  const dispatch = useDispatch();
  const { activePath } = useSelector((state) => state.path);
  const location = useLocation();

  useEffect(() => {
    const localPath = localStorage.getItem("activePath");
    if (localPath) {
      dispatch(setActivePath(localPath));
    }
  }, [dispatch]);

  useEffect(() => {
    if (location?.pathname === "/") {
      dispatch(setActivePath("/"));
      localStorage.setItem("activePath", "/");
    } else if (
      location?.pathname === "/customers" ||
      location?.pathname === "/customer-edit"
    ) {
      dispatch(setActivePath("customers"));
      localStorage.setItem("activePath", "customers");
    } else if (
      location?.pathname === "/active-products" ||
      location?.pathname === "/add-product" ||
      location?.pathname === "/paused-products"
    ) {
      dispatch(setActivePath("products"));
      localStorage.setItem("activePath", "products");
    } else if (location?.pathname === "/sales") {
      dispatch(setActivePath("sales"));
      localStorage.setItem("activePath", "sales");
    } else if (
      location?.pathname === "/sales-person" ||
      location?.pathname === "/add-sales-person"
    ) {
      dispatch(setActivePath("sales-person"));
      localStorage.setItem("activePath", "sales-person");
    } else if (
      location?.pathname === "/add-notification" ||
      location?.pathname === "/send-notification"
    ) {
      dispatch(setActivePath("notification"));
      localStorage.setItem("activePath", "notification");
    } else if (location?.pathname === "/settings") {
      dispatch(setActivePath("settings"));
      localStorage.setItem("activePath", "settings");
    } else {
      dispatch(setActivePath(undefined));
      localStorage.setItem("activePath", undefined);
    }
  }, [location, dispatch]);
  return activePath;
}
