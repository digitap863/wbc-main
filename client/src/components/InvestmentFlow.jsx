import React from 'react'
import frame from '../assets/Images/flowframe.png'
import frame2 from '../assets/Images/flowframe2.png'

function InvestmentFlow() {
    return (
        <div className='md:mx-44 mx-3 mt-10 flex flex-col items-center'>
            <h2 className='font-zen text-white text-xl md:text-3xl w-72 text-center'>WHY INVEST IN WBC ?</h2>
            <p className='font-space text-slate-400 my-3 md:w-[27rem] text-sm text-center'>Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
            <div className='flex md:mt-12 mt-5 flex-col w-full relative'>
                <div className='flex md:flex-row flex-col  md:items-start items-end'>
                    <div className='relative h-[9.5rem] group'>
                        <img src={frame} alt="" className='absolute left-[24rem] w-[9rem] top-[4rem] hidden md:block' />
                        <img src={frame2} alt="" className='absolute -left-16 top-16 w-[4rem]  md:hidden' />
                        <div className="absolute -inset-[3px] bg-gradient-to-r from-[#080B2A]  to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] h-[9.5rem] flex flex-col justify-center bg-[#080b2d] py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Partnership Investment = INR 1 Lakh</h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>To become a WBC partner, simply make a Partnership Investment of 1 lakh.</p>
                        </div>
                    </div>
                    <div className='relative md:ml-36 h-[9.5rem] group md:mt-28 mt-10'>
                        <div className="absolute -inset-[3px] bg-gradient-to-l from-[#080B2A]  to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] bg-[#080b2d] h-[9.5rem] flex flex-col justify-center py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Private Limited Co.</h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>A private limited company with 100% shares is a closely-held business entity limited by shares owned by its shareholders.</p>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col  md:items-start items-end md:mt-20 mt-10'>
                    <div className='relative h-[9.5rem] group'>
                        <div className="absolute -inset-[3px] bg-gradient-to-r from-[#080B2A]  to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] h-[9.5rem] flex flex-col justify-center bg-[#080b2d] py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Shares For Dilution
                                = 20%</h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>WBC Network plans to offer a 20% stake to potential investors.</p>
                        </div>
                    </div>
                    <div className='relative md:ml-36 h-[9.5rem] group md:mt-28 mt-12'>
                        <div className="absolute -inset-[3px] bg-gradient-to-l from-[#080B2A]  to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] bg-[#080b2d] h-[9.5rem] flex flex-col justify-center py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Total Partners = 1000</h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>WBC Network is seeking 1000 partners to join and collaborate with the company</p>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col  md:items-start items-end md:mt-28 mt-10'>
                    <div className='relative h-[9.5rem] group'>
                        <div className="absolute -inset-[3px] bg-gradient-to-r from-[#080B2A]  to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] h-[9.5rem] flex flex-col justify-center bg-[#080b2d] py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Min Investment Value = INR 1 Lakh</h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>The minimum investment value to be a partner in WBC Network is 1 lakh.</p>
                        </div>
                    </div>
                    <div className='relative md:ml-36 h-[9.5rem] group md:mt-28 mt-10'>
                        <div className="absolute -inset-[3px] bg-gradient-to-l from-[#080B2A]  to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] bg-[#080b2d] h-[9.5rem] flex flex-col justify-center py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Total Investment = INR 10 crore</h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>WBC Network aims to raise 10 crore through investments.</p>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col  md:items-start items-end md:mt-20 mt-16'>
                    <div className='relative h-[9.5rem] group'>
                        <div className="absolute -inset-[3px] bg-gradient-to-r from-[#080B2A]  to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] h-[9.5rem] flex flex-col justify-center bg-[#080b2d] py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Stake In The Company = 0.02%</h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>Investors will possess a 0.02% stake in the company, entitling proportional participation in its future success.</p>
                        </div>
                    </div>
                    <div className='relative md:ml-36 h-[9.5rem] group md:mt-28 mt-10'>
                        <div className="absolute -inset-[3px] bg-gradient-to-l from-[#080B2A]  to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] bg-[#080b2d] h-[9.5rem] flex flex-col justify-center py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Full Investment Return
                                After 2 Years </h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>Investors can expect a full return on their investment after a period of two years, realizing their financial gains.</p>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col  md:items-start items-end md:mt-20 mt-12'>
                    <div className='relative h-[9.5rem] group'>
                        <div className="absolute -inset-[3px] bg-gradient-to-r from-[#080B2A]  to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] h-[9.5rem] flex flex-col justify-center bg-[#080b2d] py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>30+ Futurestic projects</h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>Investors will possess a 0.02% stake in the company, entitling proportional participation in its future success.</p>
                        </div>
                    </div>
                </div>
                <div className='group md:mt-36 mt-16 flex flex-col items-end md:items-center w-full'>
                    <div className='relative'>
                    <div className="absolute flex -inset-1 animate-pulse  opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt">
                        <div className='w-1/2 bg-gradient-to-l rounded-3xl from-[#080B2A]  to-pink-500'></div>
                        <div className='w-1/2 bg-gradient-to-r rounded-3xl from-[#080B2A]  to-pink-500'></div>
                    </div>
                    <div className='relative flex flex-col items-center w-[18rem] md:w-auto justify-center bg-[#080B2A] md:p-5  p-3 rounded-3xl'>
                        <p className='text-white font-space '>WBC</p>
                        <h4 className='font-zen text-white text-xl md:text-4xl md:w-[28rem] text-center'>Minimum 25-30% Guaranteed Return</h4>
                        <p className='text-white font-space text-center  text-xs md:text-sm'>WBC guarantees a minimum 25-30% return on investment, assuring substantial financial gains.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestmentFlow