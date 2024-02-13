import React from 'react'
import { Link } from 'react-router-dom';
import TruncatedText from './TruncatedText';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

function ServiceItem({ title, description, url, redirect_path }) {
    return (
        <div className='max-w-96 bg-white min-h-[430px] max-h-[430px] flex flex-col items-center rounded-xl shadow-xl shadow-gray-200 hover:shadow-green-200 hover:shadow-xl'>
            <Link to={redirect_path} className='w-full h-52'>
                <img src={url} alt={title} className='min-w-full max-h-full rounded-t-xl' />
            </Link>
            <div className='w-full min-h-28 max-h-28 mt-2 pl-3'>
                <h2 className='text-2xl font-semibold'>{title}</h2>
                <p className='text-base text-gray-600'><TruncatedText text={description} maxWords={15} url={redirect_path} /></p>
            </div>
            <div className='w-full my-10 px-3'>
                <Link to={redirect_path} className='flex flex-row justify-center items-center bg-green-400 hover:bg-green-500 py-3 md:px-7 md:max-w-fit rounded-md'>
                    <span className='pr-3 text-white'>Read More</span>
                    <ArrowLongRightIcon className='w-6 h-6 text-white' />
                </Link>
            </div>
        </div>
    )
}

export default ServiceItem