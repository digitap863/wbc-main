import React from 'react'
import image from '../assets/Images/sliderimg.png'
import GradButton from './GradButton'

function Slider() {
    return (
        <div className='md:mt-20 my-10 mx-5 md:mx- flex md:flex-row flex-col'>
            <div className='md:w-[50%] flex flex-col text-left items-center md:items-sart'>
                <h1 className='font-bold md:text-6xl text-4xl md:w-[70%] w-60 text-center md:text-left  text-white font-zen'>
                    Join <span className='stroke-text'>WBC</span> Business Network
                </h1>
                <p className='md:w-[24rem] md:-ml-10 font-semibold text-slate-600 my-1 font-mont mb-6 text-xs'>Outcome-centered products that reduce churn, optimize pricincg, and grow your subscription business end-to-end</p>
                <div className='md:flex justify-start w-[70%] hidden'>
                    <GradButton text={'Join Now'} handler={() => { alert() }} width={'w-28'} />
                </div>
                <div className='border group relative md:w-[70%] mt-5 border-violet-700 rounded-md md:block hidden'>
                    <div className='absolute group-hover:blur-xl bg-gradient-to-r rounded-lg from-[#080B2A]  via-[#15bffd] to-purple-500 -inset-0.5'></div>
                    <div className='relative bg-[#080B2A] p-5 rounded-lg'>
                        <p className='text-slate-300 font-zen text-sm'>WE ARE TARGETING</p>
                        <div className='border p-2 border-gray-800 rounded-lg'>
                            <h3 className='font-zen bg-gradient-to-r from-purple-500 to-blue-500 text-transparent text-2xl bg-clip-text'>INR 10,00,00,000/-</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 flex flex-col item-center md:-mt-10 relative'>
                <div className=''>
                    <img src={image} alt="" className='w-[30rem]' />
                </div>
                <div className='md:hidden flex justify-center w-full my-5'>
                    <GradButton text={'Join Now'} handler={() => { alert() }} width={'w-28'} />
                </div>
                <div className='rounded-md mt-1 text-center md:w-[70%] w-full  items-center flex flex-col border bg-[#080B2A] bg-opacity-50 border-purple-900 py-2 md:absolute bottom-0 left-10'>
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
            <div className='border group relative md:w-[70%] mt-5 border-violet-700 rounded-md md:hidden '>
                    <div className='absolute group-hover:blur-xl bg-gradient-to-r rounded-lg from-[#080B2A]  via-[#15bffd] to-purple-500 -inset-0.5'></div>
                    <div className='relative bg-[#080B2A] p-5 rounded-lg'>
                        <p className='text-slate-300 font-zen text-sm'>WE ARE TARGETING</p>
                        <div className='border p-2 border-gray-800 rounded-lg'>
                            <h3 className='font-zen bg-gradient-to-r from-purple-500 to-blue-500 text-transparent text-2xl bg-clip-text'>INR 10,00,00,000/-</h3>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Slider