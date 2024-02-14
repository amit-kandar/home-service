import React from 'react'
import { useMediaQuery } from 'react-responsive';

function TestimonialCard({ name, img_url, rating, address, message }) {
    const maxRating = 5;
    const filledStars = Math.round(rating);
    const emptyStars = maxRating - filledStars;

    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

    let width = 1;

    if (isTablet) {
        width = 2;
    }

    const renderStars = (count, className) => {
        return Array.from({ length: count }, (_, index) => (
            <svg key={index} className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        ));
    };
    return (
        <div className='w-full h-auto px-3 flex justify-center items-center'>
            <div className='max-w-96 min-h-56 bg-gray-200 rounded-lg p-3'>
                <div className='w-full flex flex-row items-center gap-3'>
                    <div className='w-20 h-16'>
                        <img src={img_url} alt="user" className='w-full h-full rounded-full' />
                    </div>
                    <div className='w-full h-14'>
                        <div className='w-full flex flex-row justify-between items-center'>
                            <h3 className='text-lg font-semibold text-black '>{name}</h3>
                            <div className="flex items-center">
                                {renderStars(filledStars, "w-4 h-4 text-yellow-300 ms-1")}
                                {renderStars(emptyStars, "w-4 h-4 ms-1 text-gray-300 dark:text-gray-500")}
                            </div>
                        </div>
                        <div>
                            <p className='text-xs w-full'>{address}</p>
                        </div>
                    </div>
                </div>
                <div className='p-5'>
                    <p className='text-base font-serif font-light'><span className='text-4xl'>"</span>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard