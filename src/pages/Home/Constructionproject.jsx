import React from 'react';

const Constructionproject = () => {
    return (
        <div id='construction' className='scroll-m-[22px]'>
            

            <div className="flex min-h-screen bg-amber-400">
      {/* Left Image Section */}
      <div className="hidden md:flex w-2/5 h-full justify-end items-stretch">
        <img
          src="https://images.pexels.com/photos/16129728/pexels-photo-16129728/free-photo-of-man-coding-on-pc.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="object-cover w-full h-screen"
        />
      </div>
      {/* Right Content Section */}
      <div className="flex flex-col justify-center md:w-3/5 w-full px-8 py-16 md:py-0 md:pl-20">
        <h1 className="text-black text-3xl md:text-4xl font-bold mb-6">
          Construction and <br /> renovation projects
        </h1>
        <p className="text-white text-base md:text-lg max-w-lg mb-4">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        {/* <p className="text-white text-sm mb-8">Image from Freepik</p> */}
        <button className="w-[150px] bg-black hover:scale-95 duration-200 text-white rounded-md py-3 mt-[10px]">
             <a href="#contact">CONTACT US </a>
        </button>
      </div>
    </div>




    {/* what we do */}






    <div className="h-[440px] bg-stone-900 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-12 text-center">What We Do</h1>
        <div className="flex gap-[50px] md:gap-[250px] justify-center">
          {/* Strategy */}
          <div>
            <h2 className="text-amber-400 font-semibold text-xl mb-3">Strategy.</h2>
            <ul className="space-y-1 text-white">
              <li className='hover:text-amber-300 duration-200'>Analytics and Research</li>
              <li className='hover:text-amber-300 duration-200'>Interactive Workshops</li>
              <li className='hover:text-amber-300 duration-200'>Brand Strategy</li>
              <li className='hover:text-amber-300 duration-200'>Content Strategy</li>
              <li className='hover:text-amber-300 duration-200'>Digital Strategy</li>
              <li className='hover:text-amber-300 duration-200'><span>Conversion Rate Optimization</span></li>
            </ul>
          </div>
          {/* Design */}
          <div>
            <h2 className="text-amber-400 font-semibold text-xl mb-3">Design.</h2>
            <ul className="space-y-1 text-white">
              <li className='hover:text-amber-300 duration-200'>Creative Direction</li>
              <li className='hover:text-amber-300 duration-200'>Brand Guides</li>
              <li className='hover:text-amber-300 duration-200'>Prototypes</li>
              <li className='hover:text-amber-300 duration-200'><span>UI/UX & Web Design</span></li>
              <li className='hover:text-amber-300 duration-200'>Visual Asset Creation</li>
              <li className='hover:text-amber-300 duration-200'>Motion Design</li>
            </ul>
          </div>
          {/* Development */}
          <div>
            <h2 className="text-amber-400 font-semibold text-xl mb-3">Development.</h2>
            <ul className="space-y-1 text-white">
              <li className='hover:text-amber-300 duration-200'>System Architecture Design</li>
              <li className='hover:text-amber-300 duration-200'>Full-Stack Development</li>
              <li className='hover:text-amber-300 duration-200'><span>3rd Party Integrations</span></li>
              <li className='hover:text-amber-300 duration-200'>Performance Optimization</li>
              <li className='hover:text-amber-300 duration-200'>WordPress Development</li>
              <li className='hover:text-amber-300 duration-200'>Shopify Development</li>
            </ul>
          </div>
        </div>
      </div>
            

        </div>
    );
};

export default Constructionproject;