import React from 'react';

const BrandValues = () => {
    return (
        <div id='brand' className='scroll-m-[36px]'>
            {/* Brand values */}
<div className="min-h-screen bg-[#f5f2ef]  flex items-center justify-center relative overflow-hidden">
        {/* First image - Top Left */}
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80"
          className="absolute top-[57px] left-[380px] w-[300px] h-[260px] object-cover rounded-md shadow-xl"
          style={{ zIndex: 1 }}
        />
        {/* Second image - Bottom Left */}
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80"
          alt="Laptop desk"
          className="absolute top-[331px] left-[240px] w-[440px] h-[240px] object-cover rounded-md shadow-xl"
          style={{ zIndex: 1 }}
        />
        {/* Third image - Right Side */}
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80"
          alt="Office wall"
          className="absolute top-[110px] right-[230px] w-[430px] h-[410px] object-cover rounded-md shadow-xl"
          style={{ zIndex: 1 }}
        />
        {/* Center Card */}
        <div className="relative z-10 flex flex-col items-center justify-center bg-black/90 rounded-md px-7 py-8 shadow-2xl max-w-md mx-auto text-center">
          <h2 className="text-white text-3xl font-bold mb-[13px]">Brand Values</h2>
          <p className="text-white text-base mb-[14px]">
          We create brand identities. We’re specialists in designing memorable brands within hearts.
          </p>
          {/* <span className="text-gray-300 text-sm mb-4">
            Images from <a href="https://www.freepik.com/" className="underline">Freepik</a>
          </span> */}
          <button className="mt-1 px-6 py-2 border border-gray-300 text-gray-100 rounded transition hover:scale-95 duration-200">
           <a href='#mockup'> LEARN MORE </a>
          </button>
        </div>
      </div>
        </div>
    );
};

export default BrandValues;