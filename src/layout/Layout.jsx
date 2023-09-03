import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Sidebar from "../components/shared/sidebar/Sidebar";

function Layout() {
  return (
    <div className="bg-themeMid h-screen w-full overflow-hidden">
      <div className="flex items-start h-full">
        <div className="h-full">
          <Sidebar></Sidebar>
        </div>
        <div className="h-full flex-1 w-full overflow-hidden">
          <Navbar></Navbar>
          <div className="h-[calc(100%-90px)]">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
