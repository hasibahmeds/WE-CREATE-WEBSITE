import React from "react";
import './Mockup.css';

const Mockup = () => {
  return (
    <div id="mockup" className="scroll-m-[31px]">
    <div className="min-h-screen flex items-center justify-center bg-[#f5f2ef] ">
      {/* Left side */}
      <div className="flex flex-col items-center w-1/2 gap-4 max-w-md">
        <div className="relative hover:scale-105 duration-700 w-60 h-36 ml-16 shadow-xl rounded-sm overflow-hidden">
          <img
            src="https://st3.depositphotos.com/24359662/33250/i/600/depositphotos_332509506-stock-photo-programmer-typing-code-on-desktop.jpg"
            alt="Abstract artwork"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-72 hover:scale-105 duration-700 shadow-xl h-40 mr-[80px] mock2 flex flex-col items-center justify-center rounded-sm">
          <span className="text-2xl text-white font-bold mb-2">
            MOCKUP
          </span>
          <span className="text-sm text-white font-bold mt-2">READY TO USE</span>
        </div>
      </div>
      {/* Right side */}
      <div className="w-[420px] flex flex-col gap-6 pl-8">
        {/* Card 1 */}
        <div className="bg-stone-800 hover:bg-stone-900 duration-300 text-white rounded shadow p-5">
          <div className="font-bold text-lg mb-2">Branding strategy</div>
          <div className="text-sm text-gray-200 mb-3">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Excepteur sint occaecat cupidatat
            non proident.
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-stone-800 hover:bg-stone-900 duration-300 text-white  rounded shadow p-5">
          <div className="font-bold text-lg mb-2">Designing logos</div>
          <div className="text-sm text-gray-200">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-stone-800 hover:bg-stone-900 duration-300 text-white rounded shadow p-5">
          <div className="font-bold text-lg mb-2">Brand identity</div>
          <div className="text-sm text-gray-200">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </div>
        </div>
      </div>
    </div>

        {/* crafting */}


        <div className="relative h-[480px] flex items-center justify-center bg-black">
        {/* Background image */}
        <img
          src="https://images.pexels.com/photos/30695581/pexels-photo-30695581/free-photo-of-focused-creative-work-in-home-office-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Card */}
        <div className="relative z-10 mr-[750px] mt-[11px] bg-white text-black p-[35px] max-w-md w-full rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-[20px]">Crafting digital<br />experiences</h1>
          <p className="mb-[20px] ">
            Join the elite ranks of sustained value creators
          </p>
          <button className="bg-black text-white px-6 py-3 rounded hover:scale-95 duration-300 transition">
             <a href="#contact">CONTACT US</a>
          </button>
        </div>
      </div>






    </div>
  );
};

export default Mockup;
