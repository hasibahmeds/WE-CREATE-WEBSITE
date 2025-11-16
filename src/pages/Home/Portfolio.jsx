import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio" className="scroll-m-[62px]">
      <div className="min-h-screen bg-stone-900 flex flex-col items-center px-4 py-8">
        <h1 className="text-3xl font-bold text-white mt-[12px] mb-[25px]">Portfolio</h1>
        <p className="text-gray-200 text-center max-w-2xl mb-[40px] text-sm">
        Wecreate is an award-winning, all-round digital agency with offices in Amsterdam, Hong Kong, Singapore, Bali and Philippines. At Wecreate Digital Agency Hong Kong, our commitment is to empower you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl mb-8">
          <div className="bg-gray-700 rounded overflow-hidden flex flex-col shadow hover:scale-105 duration-500">
            <img
              src="https://st2.depositphotos.com/1092019/11101/i/600/depositphotos_111017226-stock-photo-website-design-concept-on-laptop.jpg"
              className="h-48 w-full object-cover"
              alt="Website Design"
            />
            <div className="bg-white text-center py-3 text-gray-800 font-medium text-base">
              Website Design
            </div>
          </div>
          <div className="bg-gray-700 rounded overflow-hidden flex flex-col shadow hover:scale-105 duration-500">
            <img
              src="https://st4.depositphotos.com/1005233/23193/i/600/depositphotos_231938148-stock-photo-view-businessman-holding-mobile-application.jpg"
              className="h-48 w-full object-cover"
              alt="Mobile Application"
            />
            <div className="bg-white text-center py-3 text-gray-800 font-medium text-base">
              Mobile Application
            </div>
          </div>
          <div className="bg-gray-700 rounded overflow-hidden flex flex-col shadow hover:scale-105 duration-500">
            <img
              src="https://st3.depositphotos.com/9876212/15352/i/600/depositphotos_153528260-stock-photo-corporate-identity-branding-mock-up.jpg"
              className="h-48 w-full object-cover"
              alt="Corporate Design"
            />
            <div className="bg-white text-center py-3 text-gray-800 font-medium text-base">
              Corporate Design
            </div>
          </div>
          <div className="bg-gray-700 rounded overflow-hidden flex flex-col shadow hover:scale-105 duration-500">
            <img
              src="https://st2.depositphotos.com/3591429/11146/i/600/depositphotos_111467600-stock-photo-software-application-digital-concept.jpg"
              className="h-48 w-full object-cover"
              alt="Mobile Application"
            />
            <div className="bg-white text-center py-3 text-gray-800 font-medium text-base">
              Software Application
            </div>
          </div>
          <div className="bg-gray-700 rounded overflow-hidden flex flex-col shadow hover:scale-105 duration-500">
            <img
              src="https://st2.depositphotos.com/3591429/7985/i/600/depositphotos_79852094-stock-photo-responsive-design-quality-analytics-concept.jpg"
              className="h-48 w-full object-cover"
              alt="Responsive Design"
            />
            <div className="bg-white text-center py-3 text-gray-800 font-medium text-base">
              Responsive Design
            </div>
          </div>
          <div className="bg-gray-700 rounded overflow-hidden flex flex-col shadow hover:scale-105 duration-500">
            <img
              src="https://st5.depositphotos.com/9999814/79979/i/600/depositphotos_799797890-stock-photo-explore-innovative-concepts-digital-marketing.jpg"
              className="h-48 w-full object-cover"
              alt="Responsive Design"
            />
            <div className="bg-white text-center py-3 text-gray-800 font-medium text-base">
              Digital Marketing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
