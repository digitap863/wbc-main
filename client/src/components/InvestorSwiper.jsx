import React from 'react';
import InvestorImage from '../assets/Images/investorImage.png'
import icon from '../assets/Images/locicon.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import GradButton from './GradButton';

function InvestorSwiper() {
    return (
        <div className='mx-16 my-16 flex flex-col items-center'>
            <h4 className='uppercase text-white font-zen text-2xl mb-2'>our investors</h4>
            <p className='font-mont text-slate-500 font-semibold text-sm w-96 text-center'>The largest and unique Super rare WBC Community
                based on Crypto</p>
            <div className='w-full px-10 mt-7'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='  bg-[#21094a50] p-3 border border-purple-500 rounded-lg flex flex-col rounded-br-[90px]'>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-sm font-Zen text-white'>Current Investment</p>
                                    <p className='font-space text-white flex'><span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <g clip-path="url(#clip0_1_209)">
                                            <path d="M8.48575 12.7029L4.04532 10.5349L8.48172 16.5049L9.14822 15.6079V12.3784L8.48575 12.7029Z" fill="#15BFFD" />
                                            <path d="M8.48172 0.504883L3.38626 9.64783H13.5773L8.48172 0.504883Z" fill="#15BFFD" />
                                            <path d="M13.5773 9.66138L8.48172 0.504883V9.66138H13.5773Z" fill="#1286B0" />
                                            <path d="M6.94022 5.58289H7.94022V6.58289H6.94022V5.58289Z" fill="#F7F8FA" />
                                            <path d="M8.48172 7.16492L8.4617 7.1554L3.38675 9.6554H3.39127L8.46622 12.1554L8.48624 12.1459L9.14822 11.8219V7.49133L8.48172 7.16492Z" fill="#147EA5" />
                                            <path d="M6.94022 3.69141H7.94022V4.69141H6.94022V3.69141Z" fill="#F7F8FA" />
                                            <path d="M8.48575 12.7029L8.48172 16.5049L12.9213 10.5309L8.48575 12.7029Z" fill="#1286B0" />
                                            <path d="M13.5678 9.6554L8.48172 7.16492L8.4617 7.1554L8.46622 12.1554L8.48624 12.1459L13.5723 9.6554H13.5678Z" fill="#0E526A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_209">
                                                <rect width="16" height="16" fill="white" transform="translate(0.480011 0.504883)" />
                                            </clipPath>
                                        </defs>
                                    </svg></span> ₹ 1,00,000</p>
                                </div>
                                <GradButton text={"WBC MEMBER"} /></div>
                            <div className='relative group flex justify-center my-4'>
                                <div className="absolute justify-center flex left-1/4 right-1/4 inset-0.5 bg-gradient-to-r from-pink-600  to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <img src={InvestorImage} alt="" className='w-40 h-60 rounded-lg bg-[#21094a] relative' />
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='font-zen text-white text-md'>Afsal KP</p>
                                    <p className='font-mont text-slate-400 font font-semibold text-xs mt-1 flex'><span><img className='w-5 mr-2' src={icon} alt="" /></span>Taliparamb</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="31" viewBox="0 0 121 31" fill="none">
                                    <g filter="url(#filter0_f_124_341)">
                                        <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint0_linear_124_341)" stroke-width="0.918033" />
                                    </g>
                                    <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint1_linear_124_341)" stroke-width="0.918033" />
                                    <defs>
                                        <filter id="filter0_f_124_341" x="0.507213" y="0.835033" width="120.46" height="29.6598" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="2.98361" result="effect1_foregroundBlur_124_341" />
                                        </filter>
                                        <linearGradient id="paint0_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#15BFFD" stop-opacity="0" />
                                            <stop offset="0.245211" stop-color="#15BFFD" />
                                            <stop offset="0.507389" stop-color="#15BFFD" />
                                            <stop offset="0.838894" stop-color="#15BFFD" />
                                            <stop offset="1" stop-color="#15BFFD" stop-opacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#15BFFD" stop-opacity="0" />
                                            <stop offset="0.245211" stop-color="#15BFFD" />
                                            <stop offset="0.507389" stop-color="#15BFFD" />
                                            <stop offset="0.838894" stop-color="#15BFFD" />
                                            <stop offset="1" stop-color="#15BFFD" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='  bg-[#21094a50] p-3 border border-purple-500 rounded-lg flex flex-col rounded-br-[90px]'>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-sm font-Zen text-white'>Current Investment</p>
                                    <p className='font-space text-white flex'><span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <g clip-path="url(#clip0_1_209)">
                                            <path d="M8.48575 12.7029L4.04532 10.5349L8.48172 16.5049L9.14822 15.6079V12.3784L8.48575 12.7029Z" fill="#15BFFD" />
                                            <path d="M8.48172 0.504883L3.38626 9.64783H13.5773L8.48172 0.504883Z" fill="#15BFFD" />
                                            <path d="M13.5773 9.66138L8.48172 0.504883V9.66138H13.5773Z" fill="#1286B0" />
                                            <path d="M6.94022 5.58289H7.94022V6.58289H6.94022V5.58289Z" fill="#F7F8FA" />
                                            <path d="M8.48172 7.16492L8.4617 7.1554L3.38675 9.6554H3.39127L8.46622 12.1554L8.48624 12.1459L9.14822 11.8219V7.49133L8.48172 7.16492Z" fill="#147EA5" />
                                            <path d="M6.94022 3.69141H7.94022V4.69141H6.94022V3.69141Z" fill="#F7F8FA" />
                                            <path d="M8.48575 12.7029L8.48172 16.5049L12.9213 10.5309L8.48575 12.7029Z" fill="#1286B0" />
                                            <path d="M13.5678 9.6554L8.48172 7.16492L8.4617 7.1554L8.46622 12.1554L8.48624 12.1459L13.5723 9.6554H13.5678Z" fill="#0E526A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_209">
                                                <rect width="16" height="16" fill="white" transform="translate(0.480011 0.504883)" />
                                            </clipPath>
                                        </defs>
                                    </svg></span> ₹ 1,00,000</p>
                                </div>
                                <GradButton text={"WBC MEMBER"} /></div>
                            <div className='relative group flex justify-center my-4'>
                                <div className="absolute justify-center flex left-1/4 right-1/4 inset-0.5 bg-gradient-to-r from-pink-600  to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <img src={InvestorImage} alt="" className='w-40 h-60 rounded-lg bg-[#21094a] relative' />
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='font-zen text-white text-md'>Afsal KP</p>
                                    <p className='font-mont text-slate-400 font font-semibold text-xs mt-1 flex'><span><img className='w-5 mr-2' src={icon} alt="" /></span>Taliparamb</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="31" viewBox="0 0 121 31" fill="none">
                                    <g filter="url(#filter0_f_124_341)">
                                        <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint0_linear_124_341)" stroke-width="0.918033" />
                                    </g>
                                    <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint1_linear_124_341)" stroke-width="0.918033" />
                                    <defs>
                                        <filter id="filter0_f_124_341" x="0.507213" y="0.835033" width="120.46" height="29.6598" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="2.98361" result="effect1_foregroundBlur_124_341" />
                                        </filter>
                                        <linearGradient id="paint0_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#15BFFD" stop-opacity="0" />
                                            <stop offset="0.245211" stop-color="#15BFFD" />
                                            <stop offset="0.507389" stop-color="#15BFFD" />
                                            <stop offset="0.838894" stop-color="#15BFFD" />
                                            <stop offset="1" stop-color="#15BFFD" stop-opacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#15BFFD" stop-opacity="0" />
                                            <stop offset="0.245211" stop-color="#15BFFD" />
                                            <stop offset="0.507389" stop-color="#15BFFD" />
                                            <stop offset="0.838894" stop-color="#15BFFD" />
                                            <stop offset="1" stop-color="#15BFFD" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='  bg-[#21094a50] p-3 border border-purple-500 rounded-lg flex flex-col rounded-br-[90px]'>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-sm font-Zen text-white'>Current Investment</p>
                                    <p className='font-space text-white flex'><span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <g clip-path="url(#clip0_1_209)">
                                            <path d="M8.48575 12.7029L4.04532 10.5349L8.48172 16.5049L9.14822 15.6079V12.3784L8.48575 12.7029Z" fill="#15BFFD" />
                                            <path d="M8.48172 0.504883L3.38626 9.64783H13.5773L8.48172 0.504883Z" fill="#15BFFD" />
                                            <path d="M13.5773 9.66138L8.48172 0.504883V9.66138H13.5773Z" fill="#1286B0" />
                                            <path d="M6.94022 5.58289H7.94022V6.58289H6.94022V5.58289Z" fill="#F7F8FA" />
                                            <path d="M8.48172 7.16492L8.4617 7.1554L3.38675 9.6554H3.39127L8.46622 12.1554L8.48624 12.1459L9.14822 11.8219V7.49133L8.48172 7.16492Z" fill="#147EA5" />
                                            <path d="M6.94022 3.69141H7.94022V4.69141H6.94022V3.69141Z" fill="#F7F8FA" />
                                            <path d="M8.48575 12.7029L8.48172 16.5049L12.9213 10.5309L8.48575 12.7029Z" fill="#1286B0" />
                                            <path d="M13.5678 9.6554L8.48172 7.16492L8.4617 7.1554L8.46622 12.1554L8.48624 12.1459L13.5723 9.6554H13.5678Z" fill="#0E526A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_209">
                                                <rect width="16" height="16" fill="white" transform="translate(0.480011 0.504883)" />
                                            </clipPath>
                                        </defs>
                                    </svg></span> ₹ 1,00,000</p>
                                </div>
                                <GradButton text={"WBC MEMBER"} /></div>
                            <div className='relative group flex justify-center my-4'>
                                <div className="absolute justify-center flex left-1/4 right-1/4 inset-0.5 bg-gradient-to-r from-pink-600  to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <img src={InvestorImage} alt="" className='w-40 h-60 rounded-lg bg-[#21094a] relative' />
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='font-zen text-white text-md'>Afsal KP</p>
                                    <p className='font-mont text-slate-400 font font-semibold text-xs mt-1 flex'><span><img className='w-5 mr-2' src={icon} alt="" /></span>Taliparamb</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="31" viewBox="0 0 121 31" fill="none">
                                    <g filter="url(#filter0_f_124_341)">
                                        <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint0_linear_124_341)" stroke-width="0.918033" />
                                    </g>
                                    <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint1_linear_124_341)" stroke-width="0.918033" />
                                    <defs>
                                        <filter id="filter0_f_124_341" x="0.507213" y="0.835033" width="120.46" height="29.6598" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="2.98361" result="effect1_foregroundBlur_124_341" />
                                        </filter>
                                        <linearGradient id="paint0_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#15BFFD" stop-opacity="0" />
                                            <stop offset="0.245211" stop-color="#15BFFD" />
                                            <stop offset="0.507389" stop-color="#15BFFD" />
                                            <stop offset="0.838894" stop-color="#15BFFD" />
                                            <stop offset="1" stop-color="#15BFFD" stop-opacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#15BFFD" stop-opacity="0" />
                                            <stop offset="0.245211" stop-color="#15BFFD" />
                                            <stop offset="0.507389" stop-color="#15BFFD" />
                                            <stop offset="0.838894" stop-color="#15BFFD" />
                                            <stop offset="1" stop-color="#15BFFD" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='  bg-[#21094a50] p-3 border border-purple-500 rounded-lg flex flex-col rounded-br-[90px]'>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-sm font-Zen text-white'>Current Investment</p>
                                    <p className='font-space text-white flex'><span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <g clip-path="url(#clip0_1_209)">
                                            <path d="M8.48575 12.7029L4.04532 10.5349L8.48172 16.5049L9.14822 15.6079V12.3784L8.48575 12.7029Z" fill="#15BFFD" />
                                            <path d="M8.48172 0.504883L3.38626 9.64783H13.5773L8.48172 0.504883Z" fill="#15BFFD" />
                                            <path d="M13.5773 9.66138L8.48172 0.504883V9.66138H13.5773Z" fill="#1286B0" />
                                            <path d="M6.94022 5.58289H7.94022V6.58289H6.94022V5.58289Z" fill="#F7F8FA" />
                                            <path d="M8.48172 7.16492L8.4617 7.1554L3.38675 9.6554H3.39127L8.46622 12.1554L8.48624 12.1459L9.14822 11.8219V7.49133L8.48172 7.16492Z" fill="#147EA5" />
                                            <path d="M6.94022 3.69141H7.94022V4.69141H6.94022V3.69141Z" fill="#F7F8FA" />
                                            <path d="M8.48575 12.7029L8.48172 16.5049L12.9213 10.5309L8.48575 12.7029Z" fill="#1286B0" />
                                            <path d="M13.5678 9.6554L8.48172 7.16492L8.4617 7.1554L8.46622 12.1554L8.48624 12.1459L13.5723 9.6554H13.5678Z" fill="#0E526A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_209">
                                                <rect width="16" height="16" fill="white" transform="translate(0.480011 0.504883)" />
                                            </clipPath>
                                        </defs>
                                    </svg></span> ₹ 1,00,000</p>
                                </div>
                                <GradButton text={"WBC MEMBER"} /></div>
                            <div className='relative group flex justify-center my-4'>
                                <div className="absolute justify-center flex left-1/4 right-1/4 inset-0.5 bg-gradient-to-r from-pink-600  to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <img src={InvestorImage} alt="" className='w-40 h-60 rounded-lg bg-[#21094a] relative' />
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='font-zen text-white text-md'>Afsal KP</p>
                                    <p className='font-mont text-slate-400 font font-semibold text-xs mt-1 flex'><span><img className='w-5 mr-2' src={icon} alt="" /></span>Taliparamb</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="31" viewBox="0 0 121 31" fill="none">
                                    <g filter="url(#filter0_f_124_341)">
                                        <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint0_linear_124_341)" stroke-width="0.918033" />
                                    </g>
                                    <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint1_linear_124_341)" stroke-width="0.918033" />
                                    <defs>
                                        <filter id="filter0_f_124_341" x="0.507213" y="0.835033" width="120.46" height="29.6598" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="2.98361" result="effect1_foregroundBlur_124_341" />
                                        </filter>
                                        <linearGradient id="paint0_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#15BFFD" stop-opacity="0" />
                                            <stop offset="0.245211" stop-color="#15BFFD" />
                                            <stop offset="0.507389" stop-color="#15BFFD" />
                                            <stop offset="0.838894" stop-color="#15BFFD" />
                                            <stop offset="1" stop-color="#15BFFD" stop-opacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#15BFFD" stop-opacity="0" />
                                            <stop offset="0.245211" stop-color="#15BFFD" />
                                            <stop offset="0.507389" stop-color="#15BFFD" />
                                            <stop offset="0.838894" stop-color="#15BFFD" />
                                            <stop offset="1" stop-color="#15BFFD" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='  bg-[#21094a50] p-3 border border-purple-500 rounded-lg flex flex-col rounded-br-[90px]'>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-sm font-Zen text-white'>Current Investment</p>
                                    <p className='font-space text-white flex'><span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <g clip-path="url(#clip0_1_209)">
                                            <path d="M8.48575 12.7029L4.04532 10.5349L8.48172 16.5049L9.14822 15.6079V12.3784L8.48575 12.7029Z" fill="#15BFFD" />
                                            <path d="M8.48172 0.504883L3.38626 9.64783H13.5773L8.48172 0.504883Z" fill="#15BFFD" />
                                            <path d="M13.5773 9.66138L8.48172 0.504883V9.66138H13.5773Z" fill="#1286B0" />
                                            <path d="M6.94022 5.58289H7.94022V6.58289H6.94022V5.58289Z" fill="#F7F8FA" />
                                            <path d="M8.48172 7.16492L8.4617 7.1554L3.38675 9.6554H3.39127L8.46622 12.1554L8.48624 12.1459L9.14822 11.8219V7.49133L8.48172 7.16492Z" fill="#147EA5" />
                                            <path d="M6.94022 3.69141H7.94022V4.69141H6.94022V3.69141Z" fill="#F7F8FA" />
                                            <path d="M8.48575 12.7029L8.48172 16.5049L12.9213 10.5309L8.48575 12.7029Z" fill="#1286B0" />
                                            <path d="M13.5678 9.6554L8.48172 7.16492L8.4617 7.1554L8.46622 12.1554L8.48624 12.1459L13.5723 9.6554H13.5678Z" fill="#0E526A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_209">
                                                <rect width="16" height="16" fill="white" transform="translate(0.480011 0.504883)" />
                                            </clipPath>
                                        </defs>
                                    </svg></span> ₹ 1,00,000</p>
                                </div>
                                <GradButton text={"WBC MEMBER"} /></div>
                            <div className='relative group flex justify-center my-4'>
                                <div className="absolute justify-center flex left-1/4 right-1/4 inset-0.5 bg-gradient-to-r from-pink-600  to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <img src={InvestorImage} alt="" className='w-40 h-60 rounded-lg bg-[#21094a] relative' />
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='font-zen text-white text-md'>Afsal KP</p>
                                    <p className='font-mont text-slate-400 font font-semibold text-xs mt-1 flex'><span><img className='w-5 mr-2' src={icon} alt="" /></span>Taliparamb</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="31" viewBox="0 0 121 31" fill="none">
                                    <g filter="url(#filter0_f_124_341)">
                                        <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint0_linear_124_341)" stroke-width="0.918033" />
                                    </g>
                                    <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint1_linear_124_341)" stroke-width="0.918033" />
                                    <defs>
                                        <filter id="filter0_f_124_341" x="0.507213" y="0.835033" width="120.46" height="29.6598" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="2.98361" result="effect1_foregroundBlur_124_341" />
                                        </filter>
                                        <linearGradient id="paint0_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#15BFFD" stop-opacity="0" />
                                            <stop offset="0.245211" stop-color="#15BFFD" />
                                            <stop offset="0.507389" stop-color="#15BFFD" />
                                            <stop offset="0.838894" stop-color="#15BFFD" />
                                            <stop offset="1" stop-color="#15BFFD" stop-opacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#15BFFD" stop-opacity="0" />
                                            <stop offset="0.245211" stop-color="#15BFFD" />
                                            <stop offset="0.507389" stop-color="#15BFFD" />
                                            <stop offset="0.838894" stop-color="#15BFFD" />
                                            <stop offset="1" stop-color="#15BFFD" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default InvestorSwiper






{/* <div className='  bg-[#21094a50] p-3 border border-purple-500 rounded-lg flex flex-col item'>
<div className='flex justify-between'>
    <div>
        <p className='text-sm font-Zen text-white'>Current Investment</p>
        <p className='font-space text-white flex'><span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <g clip-path="url(#clip0_1_209)">
                <path d="M8.48575 12.7029L4.04532 10.5349L8.48172 16.5049L9.14822 15.6079V12.3784L8.48575 12.7029Z" fill="#15BFFD" />
                <path d="M8.48172 0.504883L3.38626 9.64783H13.5773L8.48172 0.504883Z" fill="#15BFFD" />
                <path d="M13.5773 9.66138L8.48172 0.504883V9.66138H13.5773Z" fill="#1286B0" />
                <path d="M6.94022 5.58289H7.94022V6.58289H6.94022V5.58289Z" fill="#F7F8FA" />
                <path d="M8.48172 7.16492L8.4617 7.1554L3.38675 9.6554H3.39127L8.46622 12.1554L8.48624 12.1459L9.14822 11.8219V7.49133L8.48172 7.16492Z" fill="#147EA5" />
                <path d="M6.94022 3.69141H7.94022V4.69141H6.94022V3.69141Z" fill="#F7F8FA" />
                <path d="M8.48575 12.7029L8.48172 16.5049L12.9213 10.5309L8.48575 12.7029Z" fill="#1286B0" />
                <path d="M13.5678 9.6554L8.48172 7.16492L8.4617 7.1554L8.46622 12.1554L8.48624 12.1459L13.5723 9.6554H13.5678Z" fill="#0E526A" />
            </g>
            <defs>
                <clipPath id="clip0_1_209">
                    <rect width="16" height="16" fill="white" transform="translate(0.480011 0.504883)" />
                </clipPath>
            </defs>
        </svg></span> ₹ 1,00,000</p>
    </div>
    <GradButton text={"WBC MEMBER"} /></div>
<div className='flex justify-center'>
    <img src={InvestorImage} alt="" className='w-40 rounded-lg' />
</div>
<div className='flex justify-between'>
    <div>
        <p className='font-zen text-white text-md'>Afsal KP</p>
        <p className='font-mont text-slate-400 font font-semibold text-xs mt-1 flex'><span><img className='w-5 mr-2' src={icon} alt="" /></span>Taliparamb</p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="121" height="31" viewBox="0 0 121 31" fill="none">
        <g filter="url(#filter0_f_124_341)">
            <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint0_linear_124_341)" stroke-width="0.918033" />
        </g>
        <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint1_linear_124_341)" stroke-width="0.918033" />
        <defs>
            <filter id="filter0_f_124_341" x="0.507213" y="0.835033" width="120.46" height="29.6598" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="2.98361" result="effect1_foregroundBlur_124_341" />
            </filter>
            <linearGradient id="paint0_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                <stop stop-color="#15BFFD" stop-opacity="0" />
                <stop offset="0.245211" stop-color="#15BFFD" />
                <stop offset="0.507389" stop-color="#15BFFD" />
                <stop offset="0.838894" stop-color="#15BFFD" />
                <stop offset="1" stop-color="#15BFFD" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                <stop stop-color="#15BFFD" stop-opacity="0" />
                <stop offset="0.245211" stop-color="#15BFFD" />
                <stop offset="0.507389" stop-color="#15BFFD" />
                <stop offset="0.838894" stop-color="#15BFFD" />
                <stop offset="1" stop-color="#15BFFD" stop-opacity="0" />
            </linearGradient>
        </defs>
    </svg>
</div>
</div> */}