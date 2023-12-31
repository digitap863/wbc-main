import React from 'react'
import spiral from '../assets/Images/ellipse.png'
import flow from '../assets/Images/comingsoonflow.png'
import img from '../assets/Images/kitchen13.png'


function ComingSoon({ title, image,content }) {
    return (
        <div className='mx-20 lg:mx-20 md:mx-0 my-16'>
            <h1 className='text-white font-zen text-center text-xl md:text-3xl'>{title} <span className='text-blue-500'>Coming Soon</span></h1>
            <div className='flex mt-10 items-center md:flex-row flex-col'>
                <div className='relative md:w-1/2'>
                    <div className='flex justify-center'>
                        <img src={spiral} alt="" className='w-72 animate-spin-slow opacity-40' />
                        <div className='absolute bottom-0 md:-bottom-4 lg:bottom-0'>
                        <img src={image} alt="" className=' lg:w-[400px] md:w-[280px] h-[370px] object-contain' />
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 relative'>
                    <img src={flow} className='absolute w-8 -left-10 top-2' alt="" />
                    <div className='my-3'>
                        <h5 className='font-zen mb-2 text-white text-xl'>{content.title1}</h5>
                        <p className='text-slate-400 md:w-80 w-64 font-mont text-xs font-semibold'>{content.content1}</p>
                    </div>
                    <div className='my-3'>
                        <h5 className='font-zen text-white text-xl'>{content.title2}</h5>
                        <p className='text-slate-400 md:w-80 w-64 font-mont text-xs font-semibold'>{content.content2}</p>
                    </div>
                    <div className='my-3'>
                        <h5 className='font-zen text-white text-xl'>{content.title3}</h5>
                        <p className='text-slate-400 md:w-80 w-64 font-mont text-xs font-semibold'>{content.content3}</p>
                    </div>
                    <div className='my-3'>
                        <h5 className='font-zen text-white text-xl'>{content.title4}</h5>
                        <p className='text-slate-400 md:w-80 w-64 font-mont text-xs font-semibold'>{content.content4}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon