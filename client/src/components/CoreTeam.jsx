import React from 'react'
import chairman from '../assets/Images/chairman.png'
import linkedIn from '../assets/Images/linkedin.png'
import instagram from '../assets/Images/insta.png'
import telegram from '../assets/Images/Telegram.png'
import facebook from '../assets/Images/fb.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperNavButtons } from './SwiperButtons'

function CoreTeam() {
    return (
        <div className='lg:mx-32 flex md:mt-20 flex-col items-center'>
            <h3 className='font-zen text-white text-3xl mb-1'>Core Team</h3>
            <p className='font-mont text-slate-300 md:w-[500px] mb-7 text-center text-xs font font-semibold'>Meet our outstanding team.</p>

            <div className='w-[90%]'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                  <SwiperSlide>
                  <div className='relative group md:mx-3 mx-16'>
                    <div className="absolute h-[17rem] -inset-[3.0px] bg-gradient-to-t from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className='relative flex  bg-[#080B2A] flex-col rounded-lg mt-1 items-center'>
                        <img src={chairman} className='w-48 h-[15.5rem]' alt="team" />
                        <div className='bg-[#060b46] px-5 py-2 rounded-b-xl w-full'>
                            <h5 className='font-zen text-white '>Ashkar</h5>
                            <p className='text-slate-500 font-mont font-semibold text-xs'>Sr. Backend Developer</p>
                            <div className='my-2 w-3 flex'>
                                <img src={linkedIn} className='mx-1' alt="" />
                                <img src={facebook} className='mx-1' alt="" />
                                <img src={instagram} className='mx-1' alt="" />
                                <img src={telegram} className='mx-1' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='relative group md:mx-3 mx-16'>
                    <div className="absolute h-[17rem] -inset-[3.0px] bg-gradient-to-t from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className='relative flex  bg-[#080B2A] flex-col rounded-lg mt-1 items-center'>
                        <img src={chairman} className='w-48 h-[15.5rem]' alt="team" />
                        <div className='bg-[#060b46] px-5 py-2 rounded-b-xl w-full'>
                            <h5 className='font-zen text-white '>Ashkar</h5>
                            <p className='text-slate-500 font-mont font-semibold text-xs'>Sr. Backend Developer</p>
                            <div className='my-2 w-3 flex'>
                                <img src={linkedIn} className='mx-1' alt="" />
                                <img src={facebook} className='mx-1' alt="" />
                                <img src={instagram} className='mx-1' alt="" />
                                <img src={telegram} className='mx-1' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='relative group md:mx-3 mx-16'>
                    <div className="absolute h-[17rem] -inset-[3.0px] bg-gradient-to-t from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className='relative flex  bg-[#080B2A] flex-col rounded-lg mt-1 items-center'>
                        <img src={chairman} className='w-48 h-[15.5rem]' alt="team" />
                        <div className='bg-[#060b46] px-5 py-2 rounded-b-xl w-full'>
                            <h5 className='font-zen text-white '>Ashkar</h5>
                            <p className='text-slate-500 font-mont font-semibold text-xs'>Sr. Backend Developer</p>
                            <div className='my-2 w-3 flex'>
                                <img src={linkedIn} className='mx-1' alt="" />
                                <img src={facebook} className='mx-1' alt="" />
                                <img src={instagram} className='mx-1' alt="" />
                                <img src={telegram} className='mx-1' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='relative group md:mx-3 mx-16'>
                    <div className="absolute h-[17rem] -inset-[3.0px] bg-gradient-to-t from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className='relative flex  bg-[#080B2A] flex-col rounded-lg mt-1 items-center'>
                        <img src={chairman} className='w-48 h-[15.5rem]' alt="team" />
                        <div className='bg-[#060b46] px-5 py-2 rounded-b-xl w-full'>
                            <h5 className='font-zen text-white '>Ashkar</h5>
                            <p className='text-slate-500 font-mont font-semibold text-xs'>Sr. Backend Developer</p>
                            <div className='my-2 w-3 flex'>
                                <img src={linkedIn} className='mx-1' alt="" />
                                <img src={facebook} className='mx-1' alt="" />
                                <img src={instagram} className='mx-1' alt="" />
                                <img src={telegram} className='mx-1' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                  </SwiperSlide>
                  <SwiperNavButtons/>
            </Swiper>
            </div>
        </div>
    )
}

export default CoreTeam