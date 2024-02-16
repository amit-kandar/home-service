import React from 'react';
import Banner from '../components/Banner';
import Clean from '../components/Clean';
import Service from '../components/Service';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
// import Test from '../components/Test';

function Home() {
    return (
        <>
            <Banner />
            <Clean />
            <Service />
            <Testimonials />
            <Contact />
        </>
    );
}

export default Home;
