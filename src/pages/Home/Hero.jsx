import React from 'react';
import { FaBrain, FaBullhorn, FaCode, FaPalette } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <div id='hero'>
        
        <div className="bg-[#f5f2ef]  min-h-screen scroll-m-56">
        {/* Hero Section */}
        <div className="relative px-4 py-12 md:py-20">
          {/* Background Elements */}
          <div className="absolute mr-[10px] right-0 top-[40px] w-64 h-64 bg-black rounded-2xl z-0"></div>
          <div className="absolute right-12 top-[85px] w-[265px] h-[265px] backhome1  z-10 rounded-2xl"></div>

          <div className="container mx-auto flex flex-col md:flex-row items-center relative z-20">
            {/* Left Content */}
            <div className="bg-white p-8 md:p-12 w-full md:w-1/2 shadow-lg rounded-sm">
              <h1 className=" text-black text-3xl md:text-4xl font-bold mb-4">
                We Create Websites
              </h1>
              <p className="text-gray-600 mb-6">
              We specialize in branding, web design, e-commerce and app development.We specialize in designing custom websites to convert your target audience into customers.
              </p>
              {/* <p className="text-sm text-black mb-6">Image from <a className="text-black hover:text-amber-400 underline" href="https://www.freepik.com/">Freepik</a></p> */}
              <button className="bg-black rounded-sm text-white px-[14px] py-[9px] font-medium hover:scale-95 duration-1000 transition-colors">
              <a href="#portfolio">VIEW PORTFOLIO</a>
              </button>
            </div>

            {/* Right Content - Device Mockups */}
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
              <div className="absolute right-10 top-10 transform rotate-6 z-20">

                  <div className="backhome rounded-2xl p-4 w-48 h-64"></div>

              </div>
              <div className="absolute right-[100px] top-20 transform -rotate-6 z-10">
                  <div className="bg-amber-400 rounded-2xl p-4 w-64 h-48"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-[#f5f2ef]  py-20 mt-[50px]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-black text-3xl font-bold mb-4">
                Epic Design & Engineering
              </h2>
              <p className="text-black max-w-2xl mx-auto">
              Our flawless designs will guide the user intuitively and will display perfectly on every device.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Strategy Card */}
              <div className="bg-amber-400 hover:bg-amber-300 duration-300 p-8 text-center shadow-xl rounded-md">
                <div className="w-16 h-16 shadow-lg bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBrain className="text-gray-600 text-xl" />
                </div>
                <h3 className="text-black font-bold mb-2">STRATEGY</h3>
                <p className="text-black text-sm">
                Our flawless web designs will guide the user intuitively and will display perfectly on every device.
                </p>
              </div>

              {/* Branding Card */}
              <div className=" p-8 text-center bg-amber-400 hover:bg-amber-300 duration-300 shadow-xl rounded-md">
                <div className="shadow-lg w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBullhorn className="text-gray-600 text-xl" />
                </div>
                <h3 className="text-black font-bold mb-2">BRANDING</h3>
                <p className="text-black text-sm">
                We create brand identities. We’re specialists in designing memorable brands that will reside within hearts
                </p>
              </div>

              {/* Development Card */}
              <div className="bg-amber-400 hover:bg-amber-300 duration-300 p-8 text-center shadow-xl rounded-md">
                <div className="shadow-lg w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCode className="text-gray-600 text-xl" />
                </div>
                <h3 className="text-black font-bold mb-2">DEVELOPMENT</h3>
                <p className="text-black text-sm">
                We create apps, concept to development. app UX design, app UI design, app development & testing.
                </p>
              </div>

              {/* Web Design Card */}
              <div className="bg-amber-400 hover:bg-amber-300 duration-300 p-8 text-center shadow-xl rounded-md">
                <div className="shadow-lg w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPalette className="text-gray-600 text-xl" />
                </div>
                <h3 className="text-black font-bold mb-2">WEB DESIGN</h3>
                <p className="text-black text-sm">
                Our flawless web designs will guide the user intuitively and will display perfectly on every device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>




        </div>
    );
};

export default Hero;