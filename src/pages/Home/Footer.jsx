import React from 'react';
import GoTop from './GoTop';

const Footer = () => {
    return (
        <div className="flex bg-black justify-center items-center max-w-screen-2xl px-4 xl:px-28">
        <button className="flex bg-black justify-center rounded-sm text-white font-semibold gap-2 items-center px-6 py-2">
                  <GoTop/>    Scroll To Up
                  </button>
        </div>
    );
};

export default Footer;