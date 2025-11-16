import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Constructionproject from './Constructionproject';
import Mockup from './Mockup';
import Contactus from './Contactus';
import Footer from './Footer';
import BrandValues from './BrandValues';
import Navbar from './Navbar';



const Home = () => {
    return (
        <div>
            <Navbar/>
           <Hero/>
           <Portfolio/>
           <BrandValues/>
            <Constructionproject/>
            <Mockup/>
            <Contactus/>
            <Footer/>

        </div>
    );
};

export default Home;