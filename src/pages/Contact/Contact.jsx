import React, { useState } from 'react';

const Contact = () => {
    const [errMsg, setErrMsg] = useState('');

    return (
        <section className='my-10'>
            <div className='grid gap-7 grid-cols-1 md:gap-10 md:grid-cols-3 text-center'>
                <div className='border rounded-md p-5'>
                    <h1 className='text-2xl font-medium mb-3'>Address</h1>
                    <p className='text-sm text-zinc-700 font-medium'>Gulshan-1, Gulshan, Dhaka</p>
                </div>

                <div className='border rounded-md p-5'>
                    <h1 className='text-2xl font-medium mb-3'>Phone</h1>
                    <p className='text-sm text-zinc-700 font-medium'>+880 1775 847516</p>
                </div>

                <div className='border rounded-md p-5'>
                    <h1 className='text-2xl font-medium mb-3'>Opening Hours</h1>
                    <p className='text-sm text-zinc-700 font-medium'>Saturday to Thursday <br />
                        09:00am to 05:00pm</p>
                </div>
            </div>

            <div className='restaurantMap my-10 w-full h-[350px]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58387.6273979981!2d90.39105325879332!3d23.84608196264045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSheraton%20Hotels%20and%20Resorts!5e0!3m2!1sen!2sbd!4v1721028455149!5m2!1sen!2sbd"  className="border-none w-full h-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* restaurantMap end */}

            <div className='getInTouch w-full'>
                <h1 className='text-2xl font-medium uppercase text-center mb-5'>Get In Touch</h1>

                <form method='POST'>
                    <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                        <input type="text" name="name" placeholder='Full Name' autoComplete='off'   required className='p-2 border rounded-md focus:border-orange-500 outline-none' />
                        <input type="email" name="email" placeholder='Email Address' autoComplete='off'   required className='p-2 border rounded-md focus:border-orange-500 outline-none' />
                    </div>

                    <textarea name="comment" rows="5" className='w-full border rounded-md p-2 my-5 focus:border-orange-500 outline-none' autoComplete='off' required placeholder='Write here...'></textarea>

                    {errMsg ? <p className='text-sm text-red-600 font-medium mb-5'>{errMsg}</p> : undefined}

                    <button className='w-full text-center outline-none border-none py-2 font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-500'>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;