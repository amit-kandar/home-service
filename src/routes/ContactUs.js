import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { HERO_IMG, CONTACT_BANNER_IMG, LOCATION, PHONE, EMAIL } from '../config/constants';
import Error from '../components/Error';

function ContactUs() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            mobile: Yup.string().required('Phone number is required'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        },
    });


    return (
        <section className='max-w-full'>
            <div className='relative flex items-center justify-center'>
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${HERO_IMG})` }}
                >
                    <div className="absolute inset-0 bg-custom-blue opacity-85"></div>
                </div>
                <div className='w-full h-full z-10 flex flex-col items-center md:flex-row justify-between lg:justify-around'>
                    <div className='flex flex-col justify-center items-center md:items-start md:w-[700px] px-3 mb-10'>
                        <h1 className='text-3xl md:text-5xl lg:text-7xl text-white font-semibold mt-10'>Contact Us</h1>
                        <p className='text-slate-300 text-base lg:text-lg mt-5 text-center md:text-start'>
                            Start a conversation with our team to explore how we can turn your vision for your
                            space into reality.
                        </p>
                    </div>
                    <div className="flex justify-center items-center md:justify-end lg:pt-20">
                        <img src={CONTACT_BANNER_IMG} alt="home man" width={300} />
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='my-10 flex flex-col gap-5 md:flex-row lg:w-4/5'>
                    <div className='w-full h-full flex md:basis-3/5 flex-col justify-start items-start px-5 lg:py-14'>
                        <h2 className='text-3xl text-left font-semibold lg:text-5xl'>
                            Get a free estimate
                        </h2>
                        <form onSubmit={formik.handleSubmit} className='w-full mt-3'>
                            <div className='flex flex-col mb-3'>
                                <label htmlFor="name" className='relative w-full min-w-40' >
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`py-3 pl-3 w-full rounded-md bg-inherit border outline-none ${(formik.errors.name && formik.touched.name) || formik.isValid.name ? "border-red-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-custom-green transition duration-200"}`}
                                    />
                                    <span className='absolute top-3 left-0 mx-3 transition duration-200 input-text'>Name</span>
                                </label>
                                {(formik.errors.name && formik.touched.name) || formik.isValid.name ? <Error err={formik.errors.name} /> : ""}
                            </div>

                            <div className='flex flex-wrap gap-3'>
                                <div className='flex flex-1 flex-col mb-3'>
                                    <label htmlFor="email" className='relative w-full min-w-48'>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            autoComplete='true'
                                            className={`py-3 pl-3 w-full bg-inherit rounded border outline-none ${(formik.errors.email && formik.touched.email) || formik.isEmailExists || formik.isValid.email ? "border-red-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-custom-green transition duration-200"}`}
                                        />
                                        <span className='absolute top-3 left-0 mx-3 transition duration-200 input-text'>Email</span>
                                    </label>
                                    {(formik.errors.email && formik.touched.email) || formik.isValid.email ? <Error err={formik.errors.email} /> : null}
                                </div>

                                <div className='flex flex-1 flex-col mb-3'>
                                    <label htmlFor="mobile" className='relative w-full min-w-48'>
                                        <input
                                            type="text"
                                            name="mobile"
                                            id="mobile"
                                            value={formik.values.mobile}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`py-3 pl-3 w-full bg-inherit rounded border outline-none ${formik.errors.mobile && formik.touched.mobile ? "border-red-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-custom-green transition duration-200"}`}
                                        />
                                        <span className='absolute top-3 left-0 mx-3 transition duration-200 input-text'>Phobe number</span>
                                    </label>
                                    {(formik.errors.mobile && formik.touched.mobile) || formik.isValid.email ? <Error err={formik.errors.mobile} /> : null}
                                </div>
                            </div>

                            <div className='flex flex-col mb-8'>
                                <label htmlFor="message" className='relative w-full min-w-48'>
                                    <textarea
                                        type="text"
                                        name="message"
                                        id="message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`pt-3 pl-3 w-full pb-16 resize-none bg-inherit rounded border outline-none ${formik.errors.message && formik.touched.message ? "border-red-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-custom-green transition duration-200"}`}
                                    ></textarea>
                                    <span className='absolute top-3 left-0 mx-3 transition duration-200 input-text'>Message</span>
                                </label>
                                {formik.errors.message && formik.touched.message && <Error err={formik.errors.message} />}
                            </div>
                            <button type="submit" className='py-3 px-8 bg-custom-green rounded-md text-lg uppercase font-serif text-white text-center'>Send</button>
                        </form>
                    </div>
                    <div className='min-w-32 h-full flex md:basis-2/5 flex-col justify-start items-start px-5 lg:py-14 '>
                        <h2 className='text-3xl text-left uppercase font-semibold lg:text-5xl'>
                            Info
                        </h2>
                        <div className='flex flex-col gap-3 mt-3'>
                            <div className='h-auto flex justify-start items-start gap-3 px-4 py-5 border border-stone-400 rounded-md'>
                                <div className='min-w-12 min-h-12 flex justify-center items-center border border-custom-green rounded-full'>
                                    <img src={LOCATION} alt="location ico" className='w-5' />
                                </div>
                                <div className=''>
                                    <h2 className='text-lg font-semibold'>Address</h2>
                                    <p className='text-sm text-stone-600 opacity-85'>
                                        Mullampara,Manjeri (po) near zindagi Hotel Malappuram (d) Kerala 676121
                                    </p>
                                </div>
                            </div>
                            <div className='h-auto flex justify-start items-start gap-3 px-4 py-5 border border-stone-400 rounded-md'>
                                <div className='min-w-12 min-h-12 flex justify-center items-center border border-custom-green rounded-full'>
                                    <img src={PHONE} alt="location ico" className='w-5' />
                                </div>
                                <div>
                                    <h2 className='text-lg font-semibold'>Phone</h2>
                                    <p className='text-base text-stone-600 opacity-85'>
                                        XXXXXX0000
                                    </p>
                                </div>
                            </div>
                            <div className='h-auto flex justify-start items-start gap-3 px-4 py-5 border border-stone-400 rounded-md'>
                                <div className='min-w-12 min-h-12 flex justify-center items-center border border-custom-green rounded-full'>
                                    <img src={EMAIL} alt="location ico" className='w-5' />
                                </div>
                                <div>
                                    <h2 className='text-lg font-semibold'>Email</h2>
                                    <p className='text-base text-stone-600 opacity-85'>
                                        example@domain.com
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full my-10 px-5'>
                {/* <MapContainer /> */}
            </div>
        </section>
    )
}

export default ContactUs