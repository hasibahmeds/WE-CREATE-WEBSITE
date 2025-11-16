import React, { useState } from "react";
import { RiDashboard3Line } from "react-icons/ri";
import { Link, Outlet } from "react-router";

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState("dashboard");
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content p-4">
          <Outlet />
        </div>

        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 gap-3 min-h-full bg-black text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link
                to="/dashboard"
                onClick={() => setSelectedButton("dashboard")}
                className={`flex items-center gap-3 text-lg p-2 rounded-md ${
                  selectedButton === "dashboard"
                    ? "bg-amber-500 text-white"
                    : "hover:bg-amber-500 hover:text-white"
                }`}
              >
                <RiDashboard3Line size={20} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addProduct"
                onClick={() => setSelectedButton("addProduct")}
                className={`flex items-center gap-3 text-lg p-2 rounded-md ${
                  selectedButton === "addProduct"
                    ? "bg-amber-500 text-white"
                    : "hover:bg-amber-500 hover:text-white"
                }`}
              >
                <RiDashboard3Line size={20} />
                Add Product
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/showProduct"
                onClick={() => setSelectedButton("showProduct")}
                className={`flex items-center gap-3 text-lg p-2 rounded-md ${
                  selectedButton === "showProduct"
                    ? "bg-amber-500 text-white"
                    : "hover: hover:text-white"
                }`}
              >
                <RiDashboard3Line size={20} />
                Show Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
