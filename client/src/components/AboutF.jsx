import React from 'react'
import Image from '../assets/Images/candle.png'
import GradButton from './GradButton'
import eclipse from '../assets/Images/ellipse.png'

function AboutF() {
    return (
        <div className='flex md:flex-row flex-col md:mx-12 mx-5 mt-28'>
            <h4 className='font-zen text-white text-4xl text-center mb-5 md:hidden'>Who we are ?</h4>
            <div className='md:w-1/2 relative flex justify-center'>
            <img src={eclipse} alt="" className='md:w-80 w-[17rem] opacity-80 animate-spin-slow ' />
            <div className='absolute -bottom-12'>
                <img src={Image} className='w-[30rem]' alt="" />
            </div>
            </div>
            <div className='flex flex-col md:w-1/2 items-center md:items-start justify-center md:mt-0 mt-10'>
                <h4 className='font-zen text-white text-4xl mb-5 md:block hidden'>Who we are ?</h4>
                <p className='text-slate-300  font-mont text-base'>Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros suspendisse varius enim ultrices  isque et quis ctumst. Feugiat amet velit faucibus amet</p>
                <br />
                <p className='text-slate-300  mb-5 font-mont text-base'>Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada massa amet lacinia aliquamid ultrices vitae.</p>
                <GradButton text={'Know More'} width={'w-28'}/>
            </div>
        </div>
    )
}

export default AboutF   