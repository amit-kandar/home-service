import React from 'react'
import ServiceItem from '../components/ServiceItem'
import { services } from '../utils/services';
import { HERO_IMG, SERVICE_BANNER_ICON } from '../config/constants';

function Services() {
    return (
        <div className='w-full'>
            <div>
                <div className='relative w-full bg-cover bg-center h-[600px] md:h-[350px] lg:h-[450px]' style={{ backgroundImage: `url(${HERO_IMG})` }}>
                    <div className="absolute inset-0 bg-blue-500 opacity-80"></div>
                    <div className="absolute w-full bottom-0 flex justify-center items-center md:justify-end">
                        <img src={SERVICE_BANNER_ICON} alt="home man" width={300} className='md:w-[300px] lg:w-[350px]' />
                    </div>
                    <div className='absolute w-full md:h-[250px] lg:h-[350px] md:w-[550px] flex items-center md:items-start md:justify-center flex-col px-3'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold mt-10'>Services</h1>
                        <p className='text-slate-300 text-base lg:text-lg mt-5 text-center md:text-start'>
                            Explore a comprehensive array of services designed to transform your living spaces into havens of comfort and style, where excellence meets efficiency.
                        </p>
                    </div>
                </div>

            </div>
            <div className='w-full flex justify-center mt-10'>
                <div className='w-5/6 grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {services.map((item) => {
                        return (
                            <ServiceItem key={item.title} title={item.title} description={item.description} url={item.url} redirect_path={item.redirect_path} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services