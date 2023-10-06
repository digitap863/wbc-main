import React from 'react'
import image from '../assets/Images/sliderimg.png'
import GradButton from './GradButton'

function Slider() {
    return (
        <div className='md:mt-20 my-10 mx-5  md:mx- flex md:flex-row flex-col 2xl:h-[70vh]'>
            <div className='md:w-[50%] flex flex-col text-left items-center justify-center md:items-sart'>
                <h1 className='font-bold md:text-6xl text-4xl md:w-[70%] w-60 text-center md:text-left  text-white font-zen'>
                    Join <span className='md:stroke-text stroke-textm'>WBC</span> Business Network
                </h1>
                <p className='font-semibold text-slate-400 my-1 font-mont mb-6 md:text-[0.9rem] lg:text-[1rem] w-72 md:w-96 md:ml-24 lg:w-[27rem] lg:ml-5 2xl:-ml-20 mt-3'>Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
                <div className='md:flex justify-start w-[70%] hidden'>
                    <GradButton text={'Join Now'} handler={() => { alert() }} width={'w-32'} />
                </div>
                <div className='border group relative lg:w-[70%] mt-5 border-violet-700 rounded-md md:block hidden md:w-[90%]'>
                    <div className='absolute group-hover:blur-sm bg-gradient-to-r rounded-lg from-[#080B2A]  via-[#15bffd] to-purple-500 -inset-0.5'></div>
                    <div className='relative bg-[#080B2A] p-5 rounded-lg'>
                        <p className='text-slate-300 font-zen text-sm'>WE ARE TARGETING</p>
                        <div className='border p-2 border-gray-800 rounded-lg'>
                            <h3 className='font-zen bg-gradient-to-r from-purple-500 to-blue-500 text-transparent md:text-xl lg:text-2xl bg-clip-text'>INR 10,00,00,000/-</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 flex flex-col item-center md:-mt-10 relative'>
                <div className=''>
                    <img src={image} alt="" className='w-[30rem] 2xl:w-[80%]' />
                </div>
                <div className='md:hidden flex justify-center w-full my-5'>
                    <GradButton text={'Join Now'} handler={() => { alert() }} width={'w-28'} />
                </div>
                <div className='rounded-md mt-1 text-center md:w-[70%] w-full  items-center flex flex-col border bg-[#080B2A] bg-opacity-50 border-purple-900 py-2 md:absolute bottom-0 left-10 2xl:bottom-6'>
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
                            <h3 className='font-zen bg-gradient-to-r from-purple-500 to-blue-500 text-transparent text-xl md:text-2xl bg-clip-text'>INR 10,00,00,000/-</h3>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Slider