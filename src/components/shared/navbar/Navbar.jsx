import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../../../assets/getAssets";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar py-5 px-8 bg-white">
      <div className="flex-1">
        <button type="button" onClick={() => toggleSidebar((prev) => !prev)}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 9.33337H28"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12.6533 16H28"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4 16H7.98667"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4 22.6666H28"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={profile} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-4 shadow menu menu-sm dropdown-content bg-base-100 w-[178px] rounded-none"
          >
            <li>
              <Link to="/profile" className="bg-transparent py-2">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>My Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.4399 15.3699C17.2499 15.3699 17.0599 15.2999 16.9099 15.1499C16.6199 14.8599 16.6199 14.3799 16.9099 14.0899L18.9399 12.0599L16.9099 10.0299C16.6199 9.73994 16.6199 9.25994 16.9099 8.96994C17.1999 8.67994 17.6799 8.67994 17.9699 8.96994L20.5299 11.5299C20.8199 11.8199 20.8199 12.2999 20.5299 12.5899L17.9699 15.1499C17.8199 15.2999 17.6299 15.3699 17.4399 15.3699Z"
                      fill="#292D32"
                    />
                    <path
                      d="M19.9298 12.8101H9.75977C9.34977 12.8101 9.00977 12.4701 9.00977 12.0601C9.00977 11.6501 9.34977 11.3101 9.75977 11.3101H19.9298C20.3398 11.3101 20.6798 11.6501 20.6798 12.0601C20.6798 12.4701 20.3398 12.8101 19.9298 12.8101Z"
                      fill="#292D32"
                    />
                    <path
                      d="M11.7598 20.75C6.60977 20.75 3.00977 17.15 3.00977 12C3.00977 6.85 6.60977 3.25 11.7598 3.25C12.1698 3.25 12.5098 3.59 12.5098 4C12.5098 4.41 12.1698 4.75 11.7598 4.75C7.48977 4.75 4.50977 7.73 4.50977 12C4.50977 16.27 7.48977 19.25 11.7598 19.25C12.1698 19.25 12.5098 19.59 12.5098 20C12.5098 20.41 12.1698 20.75 11.7598 20.75Z"
                      fill="#292D32"
                    />
                  </svg>
                </span>
                <span>Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
