import React from 'react'
import eclipse from '../assets/Images/ellipse.png'
import chairman from '../assets/Images/chairman.png'

function ChairmanComponent() {
  return (
    <div className='md:mx-16 mb-24 mx-4 lg:mt-28 mt-10 flex flex-col lg:flex-row items-center'>
        <div className='lg:w-1/2 lg:ml-20'>
            <h3 className='font-zen text-white md:text-left text-center text-2xl md:text-3xl mb-3'>Chairman Message</h3>
            <p className='font-mont text-slate-500 md:text-base text-sm font-semibold lg:w-[480px]'><span className='text-slate-300 font-zen'>"</span> As the Chairman of WBC Business Network, I welcome you to an inspiring journey of growth and success. Together, let's seize opportunities, achieve greatness, and create a prosperous tomorrow. <span className='text-slate-300 font-zen'>"</span></p>
        </div>
        <div className='lg:w-1/2 flex justify-center items-center relative lg:mt-0 mt-20 h-80'>
            <img src={eclipse} alt="" className='md:w-80 w-[17rem] animate-spin-slow' />
            <div className='absolute left-[%] bottom-5'>
                <img src={chairman} className='w-72' alt="" />
            </div>
        </div>  
    </div>
  )
}

export default ChairmanComponent