import React from 'react'
import eclipse from '../assets/Images/ellipse.png'

function ProjectOverview({img}) {
  return (
    <div className='md:mx-20 md:mb-24 md:mt-40 mb-16 flex flex-col-reverse md:flex-row items-center'>
    <div className='md:w-1/2 px-8 mt-9 md:mt-0 md:px-0'>
        <h3 className='font-zen text-white text-3xl mb-3 md:block hidden'>Project Overview</h3>
        <p className='font-mont text-slate-500 md:text-base text-sm font-semibold md:w-[480px]'>Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros suspendisse varius enim ultrices  isque et quis ctumst. Feugiat amet velit faucibus amet</p>
        <br />
        <p className='font-mont text-slate-500 md:text-base text-sm font-semibold md:w-[480px]'>Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada massa amet lacinia aliquamid ultrices vitae.</p>
    </div>
    <div className='md:w-1/2 flex justify-center items-center md:mt-0 mt-10 relative h-80'>
      
        <img src={eclipse} alt="spinneranimation" className='md:w-80 w-[19rem] animate-spin-slow opacity-50' />
        <div className='absolute bottom-5'>
            <img src= {img} className='w-[500px] h-[400px] object-contain' alt="" />
        </div>
    </div>  
    <h3 className='font-zen text-white text-3xl mb-3 md:hidden'>Project Overview</h3>
</div>
  )
}

export default ProjectOverview