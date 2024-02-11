import React from 'react';
import { HEADPHONE_IMG, HERO_IMG, HOME_MAN_IMG, LEAF_IMG } from '../config/constants';

function Banner() {
    return (
        <div className="relative flex justify-center bg-cover bg-center h-[830px] lg:h-[700px]" style={{ backgroundImage: `url(${HERO_IMG})` }}>
            <div className="absolute inset-0 bg-blue-600 opacity-80"></div>
            <div className="absolute bottom-0 lg:right-0 flex justify-center items-center">
                <img src={HOME_MAN_IMG} alt="home man" width={400} className='md:w-[500px]' />
            </div>
            <div className="absolute flex flex-col text-white px-5 md:w-3/4 lg:w-3/5 lg:left-0">
                <img src={LEAF_IMG} alt="banner leaf" width={50} className='self-end' />
                <div className='flex flex-col gap-3'>
                    <h2 className='text-3xl text-center font-semibold md:text-4xl lg:text-5xl lg:text-left'>
                        Bringing Quality to Your Doorstep - Yasar Home Service Company
                    </h2>
                    <p className='text-center text-base leading-7 text-zinc-300 md:text-lg lg:text-left'>
                        Transform your house into a haven with Yasar Home Service Company – your trusted partner for professional home solutions. From repairs and maintenance to installations and cleaning, our dedicated team prioritizes your satisfaction, ensuring your home receives the care it deserves.
                    </p>
                    <div className='flex flex-row items-center self-center gap-5 lg:self-start'>
                        <img src={HEADPHONE_IMG} alt="banner headphone icon" width={70} />
                        <div className='flex flex-col'>
                            <span className='text-lg font-mono'>Have Any Question?</span>
                            <span className='text-xl font-bold'>+919645200210</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner