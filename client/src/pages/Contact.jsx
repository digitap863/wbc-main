import React from 'react'
import image from '../assets/Images/wbcReturns.png'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
import WorldMapComponent from '../components/WorldMapComponent'
import Footer from '../components/Footer'

function Contact() {
    return (
        <div>
            <Navbar active={4} />
            <Slider />
            <div className='md:mx-20 mb-12 flex md:flex-row flex-col'>
                <div>
                    <img src={image} alt="" className='w-[490px] md:m-0 mb-5' />
                </div>
                <div className='text-white font-zen text-xs'>
                    <div className='flex'>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='mb-2'>Your Name</label>
                            <input type="text" name='name' id='name' className='border border-purple-700 bg-[#060b46] py-2 w-72 border-dashed rounded-lg text-gray-200 font-semibold px-3 font-mont' />
                        </div>
                        <div className='flex flex-col ml-7'>
                            <label htmlFor="email" className='mb-2'>Your Email</label>
                            <input type="text" name='email' id='email' className='border border-purple-700 bg-[#060b46] py-2 w-72 border-dashed rounded-lg text-gray-200 font-semibold px-3 font-mont' />
                        </div>
                    </div>
                    <div className='flex flex-col mt-7'>
                        <label htmlFor="" className='mb-2'>Your Message</label>
                        <textarea type="text" name='name' id='name' className='border h-32 border-purple-700 bg-[#060b46] py-2 border-dashed rounded-lg text-gray-200 font-semibold px-3 font-mont' />
                    </div>
                    <div className='flex justify-center'>
                    <button className='bg-gradient-to-b from-purple-500 to-blue-500 rounded-md w-40 mt-5 px-2 py-2 text-xs font-zen text-white hover:text-gray-800 hover:bg-gradient-to-r duration-500'>Submit</button>
                    </div>
                </div>
            </div>
            <WorldMapComponent />
            <Footer />
        </div>
    )
}

export default Contact