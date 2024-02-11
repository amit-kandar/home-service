import React from 'react';
import { CLEAN_IMG, CLEAN_SMALL_IMG, CHECK_ICON } from '../config/constants';
import { Link } from 'react-router-dom';

function Clean() {
    return (
        <div className="flex flex-col items-center justify-center mt-8 px-5 mb-20">
            <div className='w-full md:w-3/4 lg:w-full flex flex-col lg:flex-row lg:gap-20'>
                <div className='w-full flex flex-1 justify-start sm:justify-center lg:justify-start lg:items-center'>
                    <div className="relative w-fit h-[330px]">
                        <div className="flex justify-center items-center w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-blue-700">
                            <div className="w-28 h-28 lg:w-28 lg:h-28 rounded-full bg-white"></div>
                            <div className="absolute top-5 left-2 flex justify-center w-72 h-72 lg:w-[450px] lg:h-[450px] rounded-full bg-green-400">
                                <img src={CLEAN_IMG} alt="clean img" className="absolute top-5 lg:top-7 w-[17rem] h-[17rem] lg:w-[420px] lg:h-[420px] rounded-full" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-36 h-36 lg:w-40 xl:h-40 flex justify-center rounded-full bg-blue-500">
                                <img src={CLEAN_SMALL_IMG} alt="clean small img" className="absolute top-4 w-32 h-32 lg:w-36 lg:h-36 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex-1 lg:mt-0 lg:min-w-[450px] ">
                    <h3 className='text-black text-2xl font-semibold text-center lg:text-start lg:text-4xl'>Excellence in Every Detail - <span className='text-green-600'>Where Quality Meets Commitment.</span></h3>
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
