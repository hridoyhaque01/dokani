import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoIcon, logoText } from "../../../assets/getAssets";
import { setActiveSidebar } from "../../../features/path/pathSlice";
import useGetActivePath from "../../../hooks/useGetActivePath";
import "./sidebar.css";
function Sidebar() {
  const { isSidebarActive: showSidebar } = useSelector((state) => state.path);
  const activePath = useGetActivePath();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({});
  const submenuRef = useRef({});
  const dispatch = useDispatch();

  const handleDropdown = (menu, submenuOpen) => {
    if (!submenuOpen) {
      setIsSubmenuOpen((prev) => ({
        [menu]: !prev[menu],
      }));
    }
  };

  const handleSidebar = (menu) => {
    handleDropdown(menu);
    dispatch(setActiveSidebar(true));
  };

  useEffect(() => {
    if (!activePath) {
      handleDropdown(activePath);
    }
  }, [activePath]);

  return (
    <div
      className={` h-full ${
        showSidebar ? "w-60 " : "w-[88px]"
      } sidebar bg-white h-full overflow-auto`}
    >
      <div className="w-full px-4 py-6 whitespace-nowrap shrink-0">
        <div className="flex items-center gap-1 pl-4">
          <img src={logoIcon} alt="" />
          <img
            src={logoText}
            alt=""
            className={`${showSidebar ? "block" : "hidden"} duration-300`}
          />
        </div>

        {/* nav items  */}

        <div className="mt-6">
          <ul className="flex flex-col gap-1">
            {/* dashboard  */}

            <li>
              <NavLink
                to="/"
                className={`flex items-center  gap-4 w-full rounded-lg p-4`}
                onClick={() => handleDropdown("/")}
              >
                {activePath === "/" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                      fill="#EF5777"
                    />
                    <path
                      d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
                      fill="#EF5777"
                    />
                    <path
                      d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                      fill="#EF5777"
                    />
                    <path
                      d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                      fill="#EF5777"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.77 11.25H15.73C13.72 11.25 12.75 10.36 12.75 8.52V3.98C12.75 2.14 13.73 1.25 15.73 1.25H19.77C21.78 1.25 22.75 2.14 22.75 3.98V8.51C22.75 10.36 21.77 11.25 19.77 11.25ZM15.73 2.75C14.39 2.75 14.25 3.13 14.25 3.98V8.51C14.25 9.37 14.39 9.74 15.73 9.74H19.77C21.11 9.74 21.25 9.36 21.25 8.51V3.98C21.25 3.12 21.11 2.75 19.77 2.75H15.73Z"
                      fill="#303C58"
                    />
                    <path
                      d="M19.77 22.75H15.73C13.72 22.75 12.75 21.77 12.75 19.77V15.73C12.75 13.72 13.73 12.75 15.73 12.75H19.77C21.78 12.75 22.75 13.73 22.75 15.73V19.77C22.75 21.77 21.77 22.75 19.77 22.75ZM15.73 14.25C14.55 14.25 14.25 14.55 14.25 15.73V19.77C14.25 20.95 14.55 21.25 15.73 21.25H19.77C20.95 21.25 21.25 20.95 21.25 19.77V15.73C21.25 14.55 20.95 14.25 19.77 14.25H15.73Z"
                      fill="#303C58"
                    />
                    <path
                      d="M8.27 11.25H4.23C2.22 11.25 1.25 10.36 1.25 8.52V3.98C1.25 2.14 2.23 1.25 4.23 1.25H8.27C10.28 1.25 11.25 2.14 11.25 3.98V8.51C11.25 10.36 10.27 11.25 8.27 11.25ZM4.23 2.75C2.89 2.75 2.75 3.13 2.75 3.98V8.51C2.75 9.37 2.89 9.74 4.23 9.74H8.27C9.61 9.74 9.75 9.36 9.75 8.51V3.98C9.75 3.12 9.61 2.75 8.27 2.75H4.23Z"
                      fill="#303C58"
                    />
                    <path
                      d="M8.27 22.75H4.23C2.22 22.75 1.25 21.77 1.25 19.77V15.73C1.25 13.72 2.23 12.75 4.23 12.75H8.27C10.28 12.75 11.25 13.73 11.25 15.73V19.77C11.25 21.77 10.27 22.75 8.27 22.75ZM4.23 14.25C3.05 14.25 2.75 14.55 2.75 15.73V19.77C2.75 20.95 3.05 21.25 4.23 21.25H8.27C9.45 21.25 9.75 20.95 9.75 19.77V15.73C9.75 14.55 9.45 14.25 8.27 14.25H4.23Z"
                      fill="#303C58"
                    />
                  </svg>
                )}
                <span
                  className={`duration-300 ${
                    showSidebar ? "block" : "hidden"
                  } shrink-0`}
                >
                  Dashboard
                </span>
              </NavLink>
            </li>

            {/* products */}

            <div className="w-full overflow-hidden capitalize shrink-0 ">
              <div
                className={`flex items-center justify-between gap-4 w-full rounded-lg p-4 cursor-pointer select-none text-sm ${
                  activePath === "products"
                    ? "bg-primaryLight text-primaryColor font-semibold"
                    : ""
                }`}
                onClick={() => handleSidebar("products")}
              >
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 9H16C16.55 9 17 8.55 17 8C17 7.45 16.55 7 16 7H12C11.45 7 11 7.45 11 8C11 8.55 11.45 9 12 9ZM12 13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H12C11.45 11 11 11.45 11 12C11 12.55 11.45 13 12 13ZM12 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H12C11.45 15 11 15.45 11 16C11 16.55 11.45 17 12 17ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM20 3H4C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM19 19H5V5H19V19Z"
                      className={
                        activePath === "products"
                          ? "fill-primaryColor"
                          : "fill-black"
                      }
                    />
                  </svg>

                  <p
                    className={`duration-300 ${
                      showSidebar ? "block" : "hidden"
                    } shrink-0`}
                  >
                    Products
                  </p>
                </div>
                <span
                  className={`duration-300 ${
                    isSubmenuOpen["products"]
                      ? showSidebar
                        ? "rotate-90 inline-block"
                        : "rotate-0 hidden"
                      : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M12.6664 8.74161L11.0247 7.09994L8.34974 4.42494C7.78307 3.86661 6.81641 4.26661 6.81641 5.06661V10.2583V14.9333C6.81641 15.7333 7.78307 16.1333 8.34974 15.5666L12.6664 11.2499C13.3581 10.5666 13.3581 9.43327 12.6664 8.74161Z"
                      className={
                        activePath === "products"
                          ? "fill-primaryColor"
                          : "fill-fadeHigh"
                      }
                    />
                  </svg>
                </span>
              </div>
              {/* submenu  */}

              {showSidebar && (
                <div
                  ref={(ref) => (submenuRef.current["products"] = ref)}
                  className={`flex flex-col gap-1 duration-200 dropdown-menu`}
                  style={{
                    maxHeight: isSubmenuOpen["products"]
                      ? `${submenuRef.current["products"]?.scrollHeight}px`
                      : "0",
                  }}
                >
                  <NavLink
                    to="/active-products"
                    className={`${showSidebar ? "block" : "hidden"} py-3 pl-14`}
                  >
                    Active Products
                  </NavLink>
                  <NavLink
                    to="/paused-products"
                    className={`${showSidebar ? "block" : "hidden"} py-3 pl-14`}
                  >
                    Paused
                  </NavLink>
                </div>
              )}
            </div>

            {/* sales */}

            <li>
              <NavLink
                to="/sales"
                className={`${
                  activePath === "sales" ? "active" : ""
                } flex items-center gap-4 w-full rounded-lg p-4`}
                onClick={() => handleDropdown("sales")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.47192 6H6.47192V7C6.47192 8.1 7.37192 9 8.47192 9H14.4719C15.5719 9 16.4719 8.1 16.4719 7V6H18.4719V11H20.4719V6C20.4719 4.9 19.5719 4 18.4719 4H14.2919C13.8719 2.84 12.7719 2 11.4719 2C10.1719 2 9.07192 2.84 8.65192 4H4.47192C3.37192 4 2.47192 4.9 2.47192 6V20C2.47192 21.1 3.37192 22 4.47192 22H10.4719V20H4.47192V6ZM11.4719 4C12.0219 4 12.4719 4.45 12.4719 5C12.4719 5.55 12.0219 6 11.4719 6C10.9219 6 10.4719 5.55 10.4719 5C10.4719 4.45 10.9219 4 11.4719 4Z"
                    className={
                      activePath === "sales"
                        ? "fill-primaryColor"
                        : "fill-black"
                    }
                  />
                  <path
                    d="M21.2219 13.25C20.8119 12.84 20.1319 12.84 19.7219 13.25L14.9819 18L12.7219 15.75C12.3119 15.34 11.6419 15.34 11.2219 15.75C10.8119 16.16 10.8119 16.84 11.2219 17.25L14.2719 20.29C14.6619 20.68 15.2919 20.68 15.6819 20.29L21.2119 14.75C21.6319 14.34 21.6319 13.66 21.2219 13.25Z"
                    className={
                      activePath === "sales"
                        ? "fill-primaryColor"
                        : "fill-black"
                    }
                  />
                </svg>

                <span
                  className={`duration-300 ${
                    showSidebar ? "block" : "hidden"
                  } shrink-0`}
                >
                  Sales
                </span>
              </NavLink>
            </li>

            {/* customers */}

            <li>
              <NavLink
                to="/customers"
                className={`${
                  activePath === "customers" ? "active" : ""
                } flex items-center gap-4 w-full rounded-lg p-4`}
                onClick={() => handleDropdown("customers")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"
                    className={
                      activePath === "customers"
                        ? "fill-primaryColor"
                        : "fill-black"
                    }
                  />
                </svg>

                <span
                  className={`duration-300 ${
                    showSidebar ? "block" : "hidden"
                  } shrink-0`}
                >
                  Customers
                </span>
              </NavLink>
            </li>
            {/* sales person */}

            <li>
              <NavLink
                to="/sales-person"
                className={`${
                  activePath === "sales-person" ? "active" : ""
                } flex items-center gap-4 w-full rounded-lg p-4`}
                onClick={() => handleDropdown("sales-person")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 4H14.82C14.4 2.84 13.3 2 12 2C10.7 2 9.6 2.84 9.18 4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM12 4C12.55 4 13 4.45 13 5C13 5.55 12.55 6 12 6C11.45 6 11 5.55 11 5C11 4.45 11.45 4 12 4ZM12 8C13.66 8 15 9.34 15 11C15 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11C9 9.34 10.34 8 12 8ZM18 20H6V18.6C6 16.6 10 15.5 12 15.5C14 15.5 18 16.6 18 18.6V20Z"
                    className={
                      activePath === "sales-person"
                        ? "fill-primaryColor"
                        : "fill-black"
                    }
                  />
                </svg>

                <span
                  className={`duration-300 ${
                    showSidebar ? "block" : "hidden"
                  } shrink-0`}
                >
                  Sales Person
                </span>
              </NavLink>
            </li>

            {/* Settings  */}

            <li>
              <NavLink
                to="/settings"
                className={`flex items-center  gap-4 w-full rounded-lg p-4`}
                onClick={() => handleDropdown("/settings")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.1 9.21994C18.29 9.21994 17.55 7.93994 18.45 6.36994C18.97 5.45994 18.66 4.29994 17.75 3.77994L16.02 2.78994C15.23 2.31994 14.21 2.59994 13.74 3.38994L13.63 3.57994C12.73 5.14994 11.25 5.14994 10.34 3.57994L10.23 3.38994C9.78 2.59994 8.76 2.31994 7.97 2.78994L6.24 3.77994C5.33 4.29994 5.02 5.46994 5.54 6.37994C6.45 7.93994 5.71 9.21994 3.9 9.21994C2.86 9.21994 2 10.0699 2 11.1199V12.8799C2 13.9199 2.85 14.7799 3.9 14.7799C5.71 14.7799 6.45 16.0599 5.54 17.6299C5.02 18.5399 5.33 19.6999 6.24 20.2199L7.97 21.2099C8.76 21.6799 9.78 21.3999 10.25 20.6099L10.36 20.4199C11.26 18.8499 12.74 18.8499 13.65 20.4199L13.76 20.6099C14.23 21.3999 15.25 21.6799 16.04 21.2099L17.77 20.2199C18.68 19.6999 18.99 18.5299 18.47 17.6299C17.56 16.0599 18.3 14.7799 20.11 14.7799C21.15 14.7799 22.01 13.9299 22.01 12.8799V11.1199C22 10.0799 21.15 9.21994 20.1 9.21994ZM12 15.2499C10.21 15.2499 8.75 13.7899 8.75 11.9999C8.75 10.2099 10.21 8.74994 12 8.74994C13.79 8.74994 15.25 10.2099 15.25 11.9999C15.25 13.7899 13.79 15.2499 12 15.2499Z"
                    className={
                      activePath === "settings"
                        ? "fill-primaryColor"
                        : "fill-black"
                    }
                  />
                </svg>

                <span
                  className={`duration-300 ${
                    showSidebar ? "block" : "hidden"
                  } shrink-0`}
                >
                  Settings
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
