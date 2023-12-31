import React from 'react'
import frame from '../assets/Images/coinflowframe.png'
import frame2 from '../assets/Images/coinflowframe2.png'

function CoinFlow() {
    return (
        <div className='lg:mx-44 mx-2 mt-10 flex flex-col items-center'>
            <h2 className='font-zen text-white text-xl md:text-3xl w-72 text-center'>Why Invest In WBC ?</h2>
            <p className='font-mont text-slate-400 font-semibold my-3 md:w-[27rem] text-sm text-center'>The largest and unique Super rare WBC Community based on Crypto</p>
            <div className='flex mt-8 flex-col w-full relative md:px-0 px-4 md:items-center'>
                <div className='flex lg:flex-row flex-col  lg:items-start items-end'>
                    <div className='relative h-[9.5rem] group'>
                        <img src={frame} alt="" className='md:absolute left-[24rem] w-[9rem] top-[4rem] hidden lg:block' />
                        <img src={frame2} alt="" className='absolute -left-16 top-12 w-[4rem]  lg:hidden' />
                        <div className="absolute -inset-[3px] bg-gradient-to-r from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] bg-[#080b2d] h-[9.5rem] py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white md:text-base text-xs'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Crypto Based Web App</h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>WBC is introducing a crypto-based website to earn Seef Coins.</p>
                        </div>
                    </div>
                    <div className='relative lg:ml-36 h-[9.5rem] group lg:mt-28 mt-10'>
                        <div className="absolute -inset-[3px] bg-gradient-to-l from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] bg-[#080b2d] h-[9.5rem] flex flex-col justify-center py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white md:text-base text-xs'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Website Registration</h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>Experience the crypto revolution with our web registration at  220 USD/Year for subscription. Join now and earn Seef Coins through our innovative crypto-based website.</p>
                        </div>
                    </div>
                </div>
                <div className='flex lg:mt-20 mt-10 lg:flex-row flex-col  md:items-start items-end'>
                    <div className='relative h-[9.5rem] group'>
                        <div className="absolute -inset-[3px] bg-gradient-to-r from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] h-[9.5rem] flex flex-col justify-center bg-[#080b2d] py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white md:text-base text-xs'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Subscription Benifits</h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>By subscribing to our service, you'll gain access to a host of exclusive benefits</p>
                        </div>
                    </div>
                    <div className='relative lg:ml-36 h-[9.5rem] group lg:mt-28 mt-10'>
                        <div className="absolute -inset-[3px] bg-gradient-to-l from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='relative w-[18rem] md:w-[24rem] h-[9.5rem] bg-[#080b2d] py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white md:text-base text-xs'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Watch our ad and earn Seef Coins!</h3>
                        </div>
                    </div>
                </div>
                <div className='flex lg:mt-20 mt-10  lg:flex-row flex-col lg:items-start items-end'>
                    <div className='relative h-[9.5rem] group'>
                        <div className="absolute -inset-[3px] bg-gradient-to-r from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] h-[9.5rem] flex flex-col justify-center bg-[#080b2d] py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white md:text-base text-xs'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>Weekly 2 AD Videos</h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>Watch 2 ads weekly on our website and earn 7 Seef Coins per video</p>
                        </div>
                    </div>
                    <div className='relative lg:ml-36 h-[9.5rem] group lg:mt-28 mt-10'>
                        <div className="absolute -inset-[3px] bg-gradient-to-l from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className='w-[18rem] relative md:w-[24rem] h-[9.5rem] bg-[#080b2d] py-3 rounded-lg borde px-4'>
                            <p className='text-center text-white md:text-base text-xs'>WBC</p>
                            <h3 className='font-zen text-white md:text-xl my-2'>728 Coin Earned / Year </h3>
                            <p className='font-mont text-white md:text-xs text-[11px] font-semibold'>So, you would earn a total of 728 Seef Coins per year by watching 2 ads weekly on the website.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinFlow