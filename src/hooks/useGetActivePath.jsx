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
  }, []);

  useEffect(() => {
    if (location?.pathname === "/") {
      dispatch(setActivePath("/"));
      localStorage.setItem("activePath", "/");
    } else if (
      location?.pathname === "/users" ||
      location?.pathname === "/user-edit"
    ) {
      dispatch(setActivePath("users"));
      localStorage.setItem("activePath", "users");
    } else if (
      location?.pathname === "/place" ||
      location?.pathname === "/hotel" ||
      location?.pathname === "/restaurants"
    ) {
      dispatch(setActivePath("places"));
      localStorage.setItem("activePath", "places");
    } else if (
      location?.pathname === "/country" ||
      location?.pathname === "/state" ||
      location?.pathname === "/city"
    ) {
      dispatch(setActivePath("geography"));
      localStorage.setItem("activePath", "geography");
    } else if (location?.pathname === "/ad-setup") {
      dispatch(setActivePath("ad-setup"));
      localStorage.setItem("activePath", "ad-setup");
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
  }, [location]);
  return activePath;
}
