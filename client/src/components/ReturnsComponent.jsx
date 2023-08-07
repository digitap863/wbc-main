import React from 'react'
import image from '../assets/Images/wbcReturns.png'
import flow from '../assets/Images/returnsflow.png'

function ReturnsComponent() {
    return (
        <div className='lg:mx-32 mb-12 md:ml-16 md:mt-12 flex justify-between md:flex-row flex-col'>
            <div>
                <img src={image} alt="" className='w-[490px] md:m-0 mb-5' />
            </div>
            <div className='relative lg:ml-10 md:ml-1 mx-20 flex flex-col justify-center md:mt-10'>
                <img src={flow} alt="" className='h-60 -left-16 lg:top-8 absolute'/>
                <div className='my-4'>
                    <h5 className='font-zen text-white mb-1'>Lucrative Returns</h5>
                    <p className='font-mont w-[300px] md:w-[250px] lg:w-[300px] text-slate-500 text-xs font-semibold'>Lucrative returns, stake ownership, diverse opportunities. Join WBC now!</p>
                </div>
                <div className='my-4'>
                    <h5 className='font-zen text-white mb-1'>Stakeholder Benefits</h5>
                    <p className='font-mont w-[300px] md:w-[250px] lg:w-[300px] text-slate-500 text-xs font-semibold'>WBC investment yields long-term benefits, 0.02% stake after 2 years.</p>
                </div>
                <div className='my-4'>
                    <h5 className='font-zen text-white mb-1'>Diverse Projects</h5>
                    <p className='font-mont w-[300px] md:w-[250px] lg:w-[300px] text-slate-500 text-xs font-semibold'>WBC partners access exciting projects, endless growth opportunities, profitability.</p>
                </div>
            </div>
        </div>
    )
}

export default ReturnsComponent