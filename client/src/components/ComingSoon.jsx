import React from 'react'
import spiral from '../assets/Images/ellipse.png'
import flow from '../assets/Images/comingsoonflow.png'

function ComingSoon({ title }) {
    return (
        <div className='mx-60 my-16'>
            <h1 className='text-white font-zen text-center text-3xl'>{title} <span className='text-blue-500'>Coming Soon</span></h1>
            <div className='flex mt-10 items-center'>
                <div className='relative w-1/2'>
                    <img src={spiral} alt="" className='w-60' />
                </div>
            <div className='w-1/2 relative'>
                <img src={flow} className='absolute w-8 -left-10 top-2' alt="" />
                <div className='my-3'>
                    <h5 className='font-zen mb-2 text-white text-xl'>Seef Shirts</h5>
                    <p className='text-slate-400 w-80 font-mont text-xs font-semibold'>The platform helps investors to make easy to purchase and sell their tokens</p>
                </div>
                <div className='my-3'>
                    <h5 className='font-zen text-white text-xl'>E-Commerce</h5>
                    <p className='text-slate-400 w-80 font-mont text-xs font-semibold'>The process of taking into account the collective opinion of a group</p>
                </div>
                <div className='my-3'>
                    <h5 className='font-zen text-white text-xl'>Retail</h5>
                    <p className='text-slate-400 w-80 font-mont text-xs font-semibold'>The platform helps investors to make easy to purchase and sell their tokens</p>
                </div>
                <div className='my-3'>
                    <h5 className='font-zen text-white text-xl'>Whole Sale</h5>
                    <p className='text-slate-400 w-80 font-mont text-xs font-semibold'>The platform helps investors to make easy to purchase and sell their tokens</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ComingSoon