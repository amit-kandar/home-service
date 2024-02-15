import React from 'react';
import { HEADPHONE_IMG, HERO_IMG, HOME_MAN_IMG } from '../config/constants';

function Banner() {
    return (
        <section className='w-full min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${HERO_IMG})` }}>
            <div className='w-full min-h-screen bg-custom-blue opacity-85'>
                <div className='flex flex-col items-center justify-between lg:flex-row'>
                    <div className='flex flex-col justify-center items-center py-10 px-3 lg:p-16'>
                        <h2 className='text-3xl text-white text-center font-semibold md:text-4xl lg:text-6xl lg:text-left'>
                            Bringing Quality to Your Doorstep - Yasar Home Service Company
                        </h2>
                        <p className='text-center text-lg leading-7 text-zinc-300 md:text-lg lg:text-left mt-4'>
                            Transform your house into a haven with Yasar Home Service Company – your trusted partner for professional home solutions. From repairs and maintenance to installations and cleaning, our dedicated team prioritizes your satisfaction, ensuring your home receives the care it deserves.
                        </p>
                        <div className='flex flex-row items-center self-center gap-5 lg:self-start mt-4'>
                            <img src={HEADPHONE_IMG} alt="banner headphone icon" width={70} />
                            <div className='flex flex-col text-white'>
                                <span className='text-lg font-mono'>Have Any Question?</span>
                                <span className='text-xl font-bold'>+919645200210</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:h-screen flex justify-center items-end lg:min-h-full">
                        <img src={HOME_MAN_IMG} alt="home man" width={300} className='md:w-[300px] lg:w-[500px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner