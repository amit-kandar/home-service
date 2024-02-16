import React from 'react';
import { HEADPHONE_IMG, HERO_IMG, HOME_MAN_IMG } from '../config/constants';
import { motion } from 'framer-motion';
import { fadeIn } from '../config/framer';

function Banner() {
    return (
        <section className='relative min-h-screen flex items-center justify-center'>
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${HERO_IMG})` }}
            >
                <div className="absolute inset-0 bg-custom-blue opacity-85"></div>
            </div>
            <div className='h-full z-10 flex flex-col items-center justify-between lg:flex-row'>
                <div className='flex flex-col justify-center items-center py-10 px-3 lg:p-10'>
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='text-white text-center lg:text-left'
                    >
                        <h2 className='text-3xl font-semibold md:text-4xl lg:text-6xl'>
                            Bringing Quality to Your Doorstep - Yasar Home Service Company
                        </h2>
                    </motion.div>
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
                <div className="w-full h-full flex justify-center items-end lg:min-h-screen">
                    <img src={HOME_MAN_IMG} alt="home man" width={300} className='md:w-[300px] lg:min-w-[600px]' />
                </div>
            </div>

        </section>
    )
}

export default Banner