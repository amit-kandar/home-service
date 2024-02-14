import React from 'react';
import { HERO_IMG, TEST_BANNER_IMG } from '../config/constants';
import { testimonials } from '../utils/tetimonials';
import TestimonialCard from '../components/TestimonialCard';

function Testimonials() {
    return (
        <div className='w-full'>
            <div className='relative w-full bg-cover bg-center h-[600px] md:h-[350px] lg:h-[450px]' style={{ backgroundImage: `url(${HERO_IMG})` }}>
                <div className="absolute inset-0 bg-blue-500 opacity-80"></div>
                <div className='w-full absolute flex flex-col items-center md:flex-row justify-between md:justify-between lg:justify-around h-full'>
                    <div className='flex flex-col justify-center items-center md:items-start md:w-[700px] px-3'>
                        <h1 className='text-3xl md:text-5xl lg:text-7xl text-white font-semibold mt-10'>Testimonials</h1>
                        <p className='text-slate-300 text-base lg:text-lg mt-5 text-center md:text-start'>
                            Dive into the stories of satisfaction, as clients share their journeys of collaboration with us and the positive impact on their living spaces.
                        </p>
                    </div>
                    <div className="flex justify-center items-center md:justify-end">
                        <img src={TEST_BANNER_IMG} alt="home man" width={300} className='md:w-[300px] lg:w-[350px]' />
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center mt-10'>
                <div className='w-full px-8 grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        testimonials.map((item, index) => {
                            return (
                                <TestimonialCard name={item.name} img_url={item.img_url} rating={item.rating} address={item.address} message={item.message} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonials