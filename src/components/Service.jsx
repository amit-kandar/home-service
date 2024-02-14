import React from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from '../components/ServiceItem';
import { services } from '../utils/services';
import { SERVICE_BG_IMG } from '../config/constants';

function Service() {
    return (
        <section className='py-14'>
            <div className='service w-full relative after:content[""] after:w-full after:h-[448px] after:top-0 after:absolute before:top-0 before:left-0 before:z-[1] before:content[""] before:w-full before:h-[448px] before:absolute before:bg-[#2F5FAD] before:opacity-80 ' style={{ backgroundImage: `url(${SERVICE_BG_IMG})`, position: 'relative', backgroundRepeat: "no-repeat" }}>
                <div className='block z-[1] relative w-full top-10'>
                    <div className='text-center px-3'>
                        <h1 className='text-center text-2xl md:text-4xl lg:text-5xl text-white font-semibold'>Our most popular <br /> <span className='text-custom-green'>services for you</span></h1>
                    </div>
                    <div className='w-full flex flex-wrap justify-center mt-10'>
                        <div className='w-5/6 grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
                            {services.slice(0, 8).map((item, index) => (
                                <ServiceItem key={item.title} title={item.title} description={item.description} url={item.url} redirect_path={item.redirect_path} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center mt-24'>
                <Link to="/services" className='uppercase px-10 py-3 bg-green-400 rounded-lg text-white hover:bg-green-500'>view all services</Link>
            </div>
        </section>
    );
}

export default Service;