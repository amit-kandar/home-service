import React from 'react';
import { CLEAN_IMG, CLEAN_SMALL_IMG, CHECK_ICON } from '../config/constants';
import { Link } from 'react-router-dom';

function Clean() {
    return (
        <div className="flex flex-col items-center justify-center mt-8 px-5 mb-5">
            <div className='w-full md:w-3/4 lg:w-full flex flex-col lg:flex-row lg:justify-around'>
                <div className='w-full flex justify-center sm:justify-center lg:justify-start lg:items-center lg:max-w-[500px]'>
                    <div className="relative w-80 h-[330px] md:w-96 md:h-[370px] lg:w-[430px] lg:h-[410px]">
                        <div className='top-0 left-0 w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 flex justify-center items-center bg-custom-blue rounded-full'>
                            <div className='w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-full'></div>
                        </div>
                        <div className='absolute top-5 lg:top-8 w-72 h-72 md:w-80 md:h-80 lg:w-[440px] lg:h-[440px] rounded-full bg-custom-green'>
                            <img src={CLEAN_IMG} alt="clean" className='absolute top-5 left-2 w-[270px] h-[270px] md:w-[300px] md:h-[300px] lg:w-[430px] lg:h-[430px] rounded-full' />
                            <div className='absolute bottom-0 w-40 h-40 md:w-44 md:h-44 lg:w-60 lg:h-60 bg-custom-blue rounded-full flex justify-center'>
                                <img src={CLEAN_SMALL_IMG} alt="clean small" className='absolute top-4 w-[150px] h-[150px] md:w-[170px] md:h-[170px] lg:w-56 lg:h-56 rounded-full' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 lg:mt-0 lg:max-w-[450px] ">
                    <h3 className='text-black text-2xl md:text-3xl font-semibold text-center lg:text-start lg:text-5xl'>Excellence in Every Detail - <span className='text-green-600'>Where Quality Meets Commitment.</span></h3>
                    <p className='text-base text-gray-500 text-center mt-3 lg:text-start'>
                        At Yasar Home Service Company, commitment is our core value, driving us to deliver exceptional services and ensure your satisfaction. Our dedicated team embraces challenges with unwavering excellence—trust us for all your home service needs.
                    </p>
                    <ul className='mt-5'>
                        <li className='pl-14 pr-7 mb-3' style={{ background: `url(${CHECK_ICON})`, backgroundRepeat: 'no-repeat' }}>
                            <span className='text-lg font-semibold text-blue-500'>We Are Committed</span>
                            <p className='text-gray-500 mt-2'>At Yasar Home Service Company, our commitment to exceptional service and unwavering excellence makes us your trusted choice for all home service needs.</p>
                        </li>
                        <li className='pl-14 pr-7' style={{ background: `url(${CHECK_ICON})`, backgroundRepeat: 'no-repeat' }}>
                            <span className='text-lg font-semibold text-blue-500'>Regular & Monthly Cleaning</span>
                            <p className='text-gray-500 mt-2'>Choose our regular cleaning for ongoing freshness or opt for hassle-free monthly plans to keep your home spotless effortlessly.</p>
                        </li>
                    </ul>
                    <div className='w-full flex justify-center mt-5 lg:justify-start lg:mt-7'>
                        <Link to="/about-us" className='bg-green-400 hover:bg-green-500 px-10 py-3 rounded-lg text-white text-lg uppercase cursor-pointer' type='button'>Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clean;
