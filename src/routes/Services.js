import React from 'react'
import ServiceItem from '../components/ServiceItem'
import { services } from '../utils/services';
import { HERO_IMG, SERVICE_BANNER_ICON } from '../config/constants';

function Services() {
    return (
        <section className='w-full'>
            <div className='relative flex items-center justify-center'>
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${HERO_IMG})` }}
                >
                    <div className="absolute inset-0 bg-custom-blue opacity-85"></div>
                </div>
                <div className='w-full h-full z-10 flex flex-col items-center md:flex-row justify-between lg:justify-around'>
                    <div className='flex flex-col justify-center items-center md:items-start md:w-[700px] px-3 mb-10'>
                        <h1 className='text-3xl md:text-5xl lg:text-7xl text-white font-semibold mt-10'>Services</h1>
                        <p className='text-slate-300 text-base lg:text-lg mt-5 text-center md:text-start'>
                            Explore a comprehensive array of services designed to transform your living spaces into havens of comfort and style, where excellence meets efficiency.
                        </p>
                    </div>
                    <div className="flex justify-center items-center md:justify-end lg:pt-20">
                        <img src={SERVICE_BANNER_ICON} alt="home man" width={300} />
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center py-10'>
                <div className='w-5/6 grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {services.map((item) => {
                        return (
                            <ServiceItem key={item.title} title={item.title} description={item.description} url={item.url} redirect_path={item.redirect_path} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services