import React from "react";
import Hero from "../Home/Hero";
import Portfolio from "../Home/Portfolio";
import { Link } from "react-router";
import Footer from "../Home/Footer";

const DashboardInitial = () => {
  return (
    <div className="text-black">
      <div className="bg-[#ffffff] text-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
          <p className="text-lg mb-4">Select an option from the sidebar.</p>
          <button className="bg-black rounded-sm mt-[3px] hover:scale-95 duration-700 text-white px-[18px] py-[7px] font-medium transition-colors">
            <Link to='/'>Home</Link>
          </button>
        </div>
      </div>
      <div>
          <Hero/>
          <Portfolio/>
          <Footer/>
      </div>
    </div>
  );
};

export default DashboardInitial;
