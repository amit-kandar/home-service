import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLongUpIcon } from '@heroicons/react/24/outline';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <section className='pt-16 bg-stone-800'>
            <div className='grid col-span-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 px-10'>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-white text-xl pl-3 border-l-[3px] border-l-custom-green'>About Us</h2>
                    <p className='text-sm text-stone-400'>Discover how we're reshaping homes with dedicated craftsmanship and a commitment to customer satisfaction—join us in creating your ideal living space.</p>
                </div>

                <div className='flex flex-col lg:items-center gap-3'>
                    <h2 className='text-white text-xl pl-3 border-l-[3px] border-l-custom-green'>Quick Links</h2>
                    <ul className='flex flex-col gap-1'>
                        <Link to="/" className='text-stone-400 text-sm'>Home</Link>
                        <Link to="/about-us" className='text-stone-400 text-sm'>About Us</Link>
                        <Link to="/services" className='text-stone-400 text-sm'>Services</Link>
                        <Link to="/testimonials" className='text-stone-400 text-sm'>Testimonials</Link>
                        <Link to="/contact-us" className='text-stone-400 text-sm'>Contact Us</Link>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <h2 className='text-white text-xl pl-3 border-l-[3px] border-l-custom-green'>Get Free Estimate</h2>
                    <span className='text-xl text-custom-green'>9645200210</span>
                    <p className='text-sm text-stone-400'>We're here to provide you with transparent and accurate quotes tailored to your unique needs.</p>
                    <Link to="/contact-us" className='py-3 px-4 rounded-3xl border-[1px] border-custom-green text-stone-300 max-w-fit cursor-pointer'>Contact Us</Link>
                </div>

                <div className='flex flex-col gap-3'>
                    <h2 className='text-white text-xl pl-3 border-l-[3px] border-l-custom-green'>Work Days</h2>
                    <div className='w-full flex justify-between border-b-[1px] border-gray-400 pb-2'>
                        <span className='text-stone-300 text-sm'>Mon-sat</span>
                        <span className='text-stone-300 text-sm'>09am-05pm</span>
                    </div>
                    <div className='w-full flex justify-between border-b-[1px] border-gray-400 pb-2'>
                        <span className='text-stone-300 text-sm'>Sunday</span>
                        <span className='text-custom-green text-sm'>Closed</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center bg-stone-900 py-6 px-4'>
                <div className='hidden md:flex flex-row gap-2'>
                    <Link to="/">
                        <i className="fa-brands fa-facebook border border-stone-300 rounded-full p-2 text-white hover:text-custom-blue cursor-pointer"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa-brands fa-instagram border border-stone-300 rounded-full p-2 text-white hover:text-fuchsia-500 cursor-pointer"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa-brands fa-youtube border border-stone-300 rounded-full p-2 text-white hover:text-red-600 cursor-pointer"></i>
                    </Link>
                </div>
                <p className='text-white px-5'>©2024 Yasar home service company , All Rights Reserved. | Designed by <Link to="https://www.linkedin.com/in/amit-kandar/" className='text-custom-blue'>Amit Kandar</Link></p>
                <div className='min-w-12 min-h-12 bg-custom-green flex justify-center items-center' onClick={scrollToTop}>
                    <ArrowLongUpIcon className='w-4 h-4 text-white' />
                </div>
            </div>
        </section>

    )
}

export default Footer