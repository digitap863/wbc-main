import React from 'react'
import Image from '../assets/Images/graphImage.png'
import GradButton from './GradButton'

function AboutF() {
    return (
        <div className='flex md:flex-row flex-col md:mx-12 mx-5'>
            <div className='md:w-1/2'>
                <img src={Image} alt="" className='w-[500px]' />
            </div>
            <div className='flex flex-col md:w-1/2 items-start justify-center'>
                <h4 className='font-zen text-white text-4xl'>Who we are ?</h4>
                <p className='text-slate-400  font-mont text-lg'>Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros suspendisse varius enim ultrices  isque et quis ctumst. Feugiat amet velit faucibus amet</p>
                <br />
                <p className='text-slate-400  mb-5 font-mont text-lg'>Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada massa amet lacinia aliquamid ultrices vitae.</p>
                <GradButton text={'Know More'}/>
            </div>
        </div>
    )
}

export default AboutF   