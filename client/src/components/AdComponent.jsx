import React from 'react'
import video from '../assets/video/videoplayback.mp4'

function AdComponent() {
    return (
        <div className='lg:mx-40 mx-3 my-16'>
            <div className='relative group md:mx-20 mt-20 mb-10'>
                <div className="absolute flex -inset-[3px] animate-pulse  opacity-75 group-hover:opacity-100 group-hover:blur-sm transition duration-1000 group-hover:duration-200 animate-tilt">
                    <div className='w-1/2 bg-gradient-to-l rounded-3xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                    <div className='w-1/2 bg-gradient-to-r rounded-3xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                </div>
                <div className='relative bg-[#080B2A] rounded-3xl'>
                    <div className='bg-white w-full md:p-5 p-3 rounded-3xl flex justify-center items-center flex-col bg-opacity-5'>
                        <p className='text-white'>WBC</p>
                        <h3 className='text-white font-zen text-xl md:text-4xl'>How Our Ad Works ?</h3>
                        <p className='text-slate-300 font-mont text-sm font-semibold '>Demo Ad</p>
                    </div>
                </div>
            </div>
            <div className='relative group md:mx-24 mt-10 mb-10'>
                <div className="absolute flex -inset-[3px] animate-pulse  opacity-75 group-hover:opacity-100 group-hover:blur-sm transition duration-1000 group-hover:duration-200 animate-tilt">
                    <div className='w-1/2 bg-gradient-to-l rounded-3xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                    <div className='w-1/2 bg-gradient-to-r rounded-3xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                </div>
                <div className='relative bg-[#080B2A] rounded-3xl'>
                    <div className='bg-white w-full md:p-5 p-3 rounded-3xl flex md:h-[25rem] justify-center items-center flex-col bg-opacity-5'>
                        <video src={video} autoPlay muted loop className='rounded-lg'>
                        Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdComponent