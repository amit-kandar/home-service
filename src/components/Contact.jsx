import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CONTACT_IMG } from '../config/constants';
import Error from '../components/Error'

function Contact() {
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
        <section className='w-full min-h-screen bg-custom-blue py-10'>
            <div className='w-full h-full flex flex-col lg:flex-row-reverse items-center justify-between'>
                <div className="w-full flex-1 flex justify-center items-center lg:items-end h-96 lg:h-full">
                    <img src={CONTACT_IMG} alt="home man" width={300} className='md:w-[300px] lg:w-[500px]' />
                </div>
                <div className='flex-1 w-full h-full flex flex-col justify-start items-start lg:justify-start px-10 lg:py-14 md:w-[700px] lg:w-[900px]'>
                    <h2 className='text-3xl text-white text-left font-semibold md:text-4xl lg:text-6xl'>
                        Get a free estimate
                    </h2>
                    <form onSubmit={formik.handleSubmit} className='w-full mt-3'>
                        <div className='flex flex-col mb-3'>
                            <label htmlFor="name" className='text-white font-semibold mb-2'>Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='Enter your name'
                                className={`py-3 pl-3 rounded-md bg-inherit text-white border outline-none ${(formik.errors.name && formik.touched.name) || formik.isValid.name ? "border-red-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-custom-green"}`}
                            />
                            {(formik.errors.name && formik.touched.name) || formik.isValid.name ? <Error err={formik.errors.name} /> : ""}
                        </div>

                        <div className='flex flex-wrap gap-5'>
                            <div className='flex flex-1 flex-col mb-3'>
                                <label htmlFor="email" className='text-white font-semibold mb-2'>Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='name@domain.com'
                                    autoComplete='true'
                                    className={`py-3 pl-3 text-white bg-inherit rounded border outline-none ${(formik.errors.email && formik.touched.email) || formik.isEmailExists || formik.isValid.email ? "border-red-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-custom-green"}`}
                                />
                                {(formik.errors.email && formik.touched.email) || formik.isValid.email ? <Error err={formik.errors.email} /> : null}
                            </div>

                            <div className='flex flex-1 flex-col mb-3'>
                                <label htmlFor="mobile" className='text-white font-semibold mb-2'>Phone Number</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    id="mobile"
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Phone number'
                                    className={`py-3 pl-3 text-white bg-inherit rounded border outline-none ${formik.errors.mobile && formik.touched.mobile ? "border-red-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-custom-green"}`}
                                />
                                {(formik.errors.mobile && formik.touched.mobile) || formik.isValid.email ? <Error err={formik.errors.mobile} /> : null}
                            </div>
                        </div>

                        <div className='flex flex-col mb-8'>
                            <label htmlFor="message" className='text-white font-semibold mb-2'>Message</label>
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='Message'
                                className={`pt-3 pl-3 pb-16 resize-none text-white bg-inherit rounded border outline-none ${formik.errors.message && formik.touched.message ? "border-red-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-custom-green"}`}
                            ></textarea>
                            {formik.errors.message && formik.touched.message && <Error err={formik.errors.message} />}
                        </div>
                        <button type="submit" className='py-3 px-8 bg-custom-green rounded-md text-lg uppercase font-serif text-white text-center'>Send Now</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact