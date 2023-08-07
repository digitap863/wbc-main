import React from 'react'
import Image from '../assets/Images/candle.png'
import GradButton from './GradButton'
import eclipse from '../assets/Images/ellipse.png'
import { useNavigate } from 'react-router-dom'

function AboutF({hide}) {
    const navigate = useNavigate()
    return (
        <div className='flex lg:flex-row flex-col md:mx-12 mx-5 mt-20 md:mt-28'>
            <h4 className='font-zen text-white text-2xl md:text-4xl text-center mb-5 md:hidden'>Who we are ?</h4>
            <div className='lg:w-1/2 relative flex justify-center'>
            <img src={eclipse} alt="" className='md:w-96 w-[17rem] opacity-80 animate-spin-slow ' />
            <div className='absolute -bottom-12'>
                <img src={Image} className='w-[30rem]' alt="" />
            </div>
            </div>
            <div className='flex flex-col lg:w-1/2 items-center md:items-start justify-center md:mt-0 mt-10'>
                <h4 className='font-zen text-white text-4xl mb-5 md:block hidden'>Who we are ?</h4>
                <p className='text-slate-500  font-mont font-semibold md:text-base text-sm'>At WBC Business Network, we are a dynamic community of forward-thinking entrepreneurs and investors. With a commitment to innovation and growth, we offer endless opportunities for partnership and investment. By joining us, you become a valued partner in our thriving venture, securing your share in our business.</p>
                <br />
                <p className='text-slate-500  mb-5 font-mont font-semibold md:text-base text-sm'>With promising returns and a stake in our company, we pave the way for a prosperous future together. Embrace the chance to be part of our exciting projects and experience the rewards of our collective success. Invest in Seefcoin Business today and unlock a world of possibilities.</p>
                {hide?'':<GradButton text={'Know More'} handler={()=>navigate('/about')} width={'w-28'} />}
            </div>
        </div>
    )
}

export default AboutF   