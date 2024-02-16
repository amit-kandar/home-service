import React from 'react';
import { Link } from 'react-router-dom';
import { HERO_IMG, ABOUT_BANNER_IMG, ABOUT_IMG, ABOUT_SMALL_IMG, MISSION_ICO, VISSION_ICO } from '../config/constants';

function AboutUs() {
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
                        <h1 className='text-3xl md:text-5xl lg:text-7xl text-white font-semibold mt-10'>About Us</h1>
                        <p className='text-slate-300 text-base lg:text-lg mt-5 text-center md:text-start'>
                            From humble beginnings to a comprehensive service hub, explore the narrative that defines our growth, aspirations, and the relentless pursuit of perfection.
                        </p>
                    </div>
                    <div className="flex justify-center items-center md:justify-end lg:pt-20">
                        <img src={ABOUT_BANNER_IMG} alt="home man" width={300} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-8 px-5 mb-20">
                <div className='w-full md:w-3/4 lg:w-full flex flex-col lg:flex-row lg:justify-around'>
                    <div className='w-full flex justify-center sm:justify-center lg:justify-start lg:items-center lg:max-w-[500px]'>
                        <div className="relative w-80 h-[330px] md:w-96 md:h-[370px] lg:w-[430px] lg:h-[410px]">
                            <div className='top-0 left-0 w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 flex justify-center items-center bg-custom-blue rounded-full'>
                                <div className='w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-full'></div>
                            </div>
                            <div className='absolute top-5 lg:top-8 w-72 h-72 md:w-80 md:h-80 lg:w-[440px] lg:h-[440px] rounded-full bg-custom-green'>
                                <img src={ABOUT_IMG} alt="clean" className='absolute top-5 left-2 w-[270px] h-[270px] md:w-[300px] md:h-[300px] lg:w-[430px] lg:h-[430px] rounded-full' />
                                <div className='absolute bottom-0 w-40 h-40 md:w-44 md:h-44 lg:w-60 lg:h-60 bg-custom-blue rounded-full flex justify-center'>
                                    <img src={ABOUT_SMALL_IMG} alt="clean small" className='absolute top-4 w-[150px] h-[150px] md:w-[170px] md:h-[170px] lg:w-56 lg:h-56 rounded-full' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:max-w-[450px] ">
                        <h3 className='text-black text-2xl md:text-3xl font-semibold text-center lg:text-start lg:text-5xl'>
                            Connecting Through Service –<span className='text-green-600'>Uncover Our Background.</span>
                        </h3>
                        <p className='text-base text-gray-500 text-center mt-3 lg:text-start'>
                            Since our inception in 2011, Yasar Home Service Company has been dedicated to providing excellent services, blending skilful work with a commitment to customer happiness. Over the years, our continuous growth and expansion have positioned us as the go-to destination for a comprehensive range of home services, ensuring that your every need is met under one roof.
                        </p>
                        <p className='text-base text-gray-500 text-center mt-7 lg:text-start'>
                            We are here not just to enhance your home but also to simplify your life by offering a diverse array of services. As we progress, we remain devoted to learning and improving, ensuring that you receive the very best for your home.
                        </p>
                        <div className='w-full flex justify-center mt-5 lg:justify-start lg:mt-7'>
                            <Link to="/contact-us" className='bg-green-400 hover:bg-green-500 px-10 py-3 rounded-lg text-white text-lg uppercase cursor-pointer' type='button'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-between items-center gap-10 mb-20 px-5 md:flex-row md:justify-center'>
                <div className='w-full flex justify-center items-center flex-col border border-custom-green rounded-md max-w-96 min-h-96'>
                    <div className='w-24 h-24 flex justify-center items-center bg-custom-blue rounded-full mt-8 mb-3 lg:w-28 lg:h-28'>
                        <img src={MISSION_ICO} alt="mission icon" className='w-16 h-16 rounded-full lg:w-20 lg:h-20' />
                    </div>
                    <div className='mb-5'>
                        <h2 className='text-3xl font-semibold text-custom-blue lg:text-4xl'>Our Mission</h2>
                    </div>
                    <div className='mb-5 px-3'>
                        <p className='text-base font-medium text-stone-500 text-center'>At Yasar Home Service Company, we envision transforming home services by setting new standards through innovative and sustainable solutions, creating sanctuaries of comfort and lasting joy in every home we touch.</p>
                    </div>
                </div>

                <div className='w-full flex justify-center items-center flex-col border border-custom-green rounded-md max-w-96 min-h-96'>
                    <div className='w-24 h-24 flex justify-center items-center bg-custom-blue rounded-full mt-8 mb-3 lg:w-28 lg:h-28'>
                        <img src={VISSION_ICO} alt="mission icon" className='w-16 h-16 rounded-full lg:w-20 lg:h-20' />
                    </div>
                    <div className='mb-3'>
                        <h2 className='text-3xl font-semibold text-custom-blue lg:text-4xl'>Our Vision</h2>
                    </div>
                    <div className='mb-3 px-3'>
                        <p className='text-base font-medium text-stone-500 text-center'>Our mission is to provide exceptional home services that exceed expectations, embracing diversity, innovating for enhanced living environments, and being your go-to partner for a better quality of life.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs