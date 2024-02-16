import React from 'react';
import { HERO_IMG, TEST_BANNER_IMG } from '../config/constants';
import { testimonials } from '../utils/tetimonials';
import TestimonialCard from '../components/TestimonialCard';

function Testimonials() {
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
                        <h1 className='text-3xl md:text-5xl lg:text-7xl text-white font-semibold mt-10'>Testimonials</h1>
                        <p className='text-slate-300 text-base lg:text-lg mt-5 text-center md:text-start'>
                            Dive into the stories of satisfaction, as clients share their journeys of collaboration with us and the positive impact on their living spaces.
                        </p>
                    </div>
                    <div className="flex justify-center items-center md:justify-end lg:pt-20">
                        <img src={TEST_BANNER_IMG} alt="home man" width={300} />
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center py-10'>
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
        </section>
    )
}

export default Testimonials