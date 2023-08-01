import React from 'react'
import eclipse from '../assets/Images/ellipse.png'
import chairman from '../assets/Images/chairman.png'

function ChairmanComponent() {
  return (
    <div className='md:mx-16 mb-24 mx-4 md:mt-0 mt-10 flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2'>
            <h3 className='font-zen text-white text-3xl mb-3'>Chairman Message</h3>
            <p className='font-mont text-slate-500 font-semibold md:w-[480px]'>Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros suspendisse varius enim ultrices  isque et quis ctumst. Feugiat amet velit faucibus amet</p>
            <br />
            <p className='font-mont text-slate-500  font-semibold md:w-[480px]'>Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada massa amet lacinia aliquamid ultrices vitae.</p>
        </div>
        <div className='md:w-1/2 flex justify-center items-center relative md:mt-0 mt-20 h-80'>
            <img src={eclipse} alt="" className='md:w-80 w-[17rem] animate-spin-slow' />
            <div className='absolute left-[%] bottom-5'>
                <img src={chairman} className='w-72' alt="" />
            </div>
        </div>  
    </div>
  )
}

export default ChairmanComponent