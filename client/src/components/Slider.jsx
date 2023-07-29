import React from 'react'
import image from '../assets/Images/sliderImage.png'
import GradButton from './GradButton'

function Slider() {
    return (
        <div className='md:mt-16 my-10 mx-5 md:mx-20 flex md:flex-row flex-col'>
            <div className='md:w-1/2 flex flex-col text-left items-start'>
                <h1 className='font-bold md:text-6xl text-left  text-white font-zen'>
                    Join WBC Business Network
                </h1>
                <p className='md:w-96 font-semibold text-slate-600 my-1 font-mont mb-3'>Outcome-centered products that reduce churn, optimize pricincg, and grow your subscription business end-to-end</p>
                <GradButton text={'BUY TOKEN'} handler={()=>{alert()}}/>
                <div className='border md:w-[70%] p-4 mt-5 border-violet-700 rounded-md'>
                    <p className='text-slate-300 font-zen'>WE ARE TARGETING</p>
                    <div className='border p-2 border-gray-700'>
                        <h3 className='font-zen bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text'>INR 10,00,00,000/-</h3>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 flex flex-col items-center'>
                <div className=''>
                    <img src={image} alt="" className='h-80' />
                </div>
                <div className='rounded-md mt-1 text-center md:w-[70%] w-full  items-center flex flex-col bg-purple-950 py-2'>
                <p className='font-zen text-white'>WBC MEMBER</p>
                <div className='flex'>
                <div className='border mx-3 rounded-md w-8 h-8 font-bold text-white border-blue-400 my-2'><p>0</p></div>
                <div className='border mx-3 rounded-md w-8 h-8 font-bold text-white border-blue-400 my-2'><p>0</p></div>
                <div className='border mx-3 rounded-md w-8 h-8 font-bold text-white border-blue-400 my-2'><p>0</p></div>
                <div className='border mx-3 rounded-md w-8 h-8 font-bold text-white border-blue-400 my-2'><p>0</p></div>
                </div>
                <p className='font-zen text-white text-xs mt-1'>GROWING TOWARDS THE FUTURE</p>
                </div>
            </div>
        </div>
    )
}

export default Slider